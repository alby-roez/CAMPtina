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
 * @author Palmira
 */
@Component
public class JwtTokenProvider {

	private static final Logger logger = LoggerFactory.getLogger(JwtTokenProvider.class);

	@Value("${Camptina.jwtSecret}")
	private String jwtSecret;

	@Value("{Camptina.jwtExpirationMs}")
	private int jwtExpirationMs;

	public String generadorJwtToken(Authentication authentication) {

		UserDetailsImpl usuariPrincipal = (UserDetailsImpl) authentication.getPrincipal();

		return Jwts.builder().setSubject((usuariPrincipal.getUsername())).setIssuedAt(new Date())
				.setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
				.signWith(SignatureAlgorithm.HS512, jwtSecret).compact();

	}

	public String getUserNameFromJwtToken(String token) {
		return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
	}

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
