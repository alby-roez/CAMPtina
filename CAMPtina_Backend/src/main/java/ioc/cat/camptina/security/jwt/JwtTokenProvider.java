package ioc.cat.camptina.security.jwt;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import ioc.cat.camptina.security.service.UserDetailsImpl;

/**
 * Component encarregat de generar i validar tokens JWT per a l'autenticació
 * d'usuaris.
 * 
 * Aquesta classe utilitza claus secretes definides a l'arxiu de configuració
 * 'application.properties' per signar i verificar tokens JWT.
 * 
 * @author Palmira
 */
@Component
public class JwtTokenProvider {

	private static final Logger logger = LoggerFactory.getLogger(JwtTokenProvider.class);

	// Clau secreta per signar els tokens JWT (configurada a application.properties)
	@Value("${Camptina.jwtSecret}")
	private String jwtSecret;

	// Temps de validesa del token (en mil·lisegons), també definit a
	// application.properties
	@Value("${Camptina.jwtExpirationMs}")
	private int jwtExpirationMs;

	/**
	 * Genera un Token per a un usuari autenticat
	 * 
	 * @param authentication L'objecte d'autenticació obtingut després del login
	 * @return token JWT generat i signat
	 */
	public String generadorJwtToken(Authentication authentication) {

		UserDetailsImpl usuariPrincipal = (UserDetailsImpl) authentication.getPrincipal();
		System.out.println(Jwts.builder().setSubject((usuariPrincipal.getUsername())).setIssuedAt(new Date())
				.setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
				.signWith(SignatureAlgorithm.HS512, jwtSecret).compact());
		return Jwts.builder().setSubject((usuariPrincipal.getUsername())).setIssuedAt(new Date())
				.setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
				.signWith(SignatureAlgorithm.HS512, jwtSecret).compact();

	}

	/**
	 * Extreu el nom d'usuari (subject) d'un token JWT
	 * 
	 * @param token rebut
	 * @return Nom d'usuari que conté el token
	 */
	public String getUserNameFromJwtToken(String token) {
		return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
	}

	/**
	 * Valida un token rebut Comprova que:
	 *  - Tingui el format correcte 
	 *  - No hagi expirat 
	 *  - Estigui signat correctament
	 * 
	 * @param authToken token JWT a validar
	 * @return true si es vàlid, false si no ho és
	 */
	public boolean validarJwtToken(String authToken) {
		try {
			Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
			return true;
		} catch (MalformedJwtException e) {
			logger.error("Token invàlid: {}", e.getMessage());
		} catch (ExpiredJwtException e) {
			logger.error("JWT el token ha expirat: {}", e.getMessage());
		} catch (UnsupportedJwtException e) {
			logger.error("JWT token sense suport: {}", e.getMessage());
		} catch (IllegalArgumentException e) {
			logger.error("JWT es buit: {}", e.getMessage());
		}
		return false;
	}

}
