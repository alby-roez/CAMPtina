package ioc.cat.camptina.security.jwt;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import ioc.cat.camptina.security.service.UserDetailsServiceImpl;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Filtre de seguretat que s'executa una vegada per petició
 * (OncePerRequestFilter).
 * 
 * Aquest filtre: 
 * - Intercepta totes les peticions HTTP entrants. 
 * - Comprova si hi ha un token JWT vàlid a la capçalera "Authorization". 
 * - Si el token és vàlid, estableix l'usuari autenticat en el context de seguretat de Spring.
 * 
 * @author Palmira
 */
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	private JwtTokenProvider jwtTokenProvider;

	@Autowired
	private UserDetailsServiceImpl userDetailsService;

	/**
	 * Mètode principal del filtre. Executat automàticament per Spring en cada
	 * petició.
	 * 
	 * @param request     Petició HTTP rebuda
	 * @param response    Resposta HTTP a retornar
	 * @param filterChain Cadena de filtres que permet continuar amb l'execució
	 *                    normal
	 */
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		try {
			// Extracció del token JWT de la capçalera Authorization
			String jwt = this.parseJwt(request);
			// si hi ha token i es vàlid
			if (jwt != null && jwtTokenProvider.validarJwtToken(jwt)) {

				// s'obté el nom d'usuari des del token
				String username = jwtTokenProvider.getUserNameFromJwtToken(jwt);

				// Es carreguen les dades de l'usuari des del servei
				UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);

				// Es crea un objecte d'autenticació amb les dades de l'usuari
				UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
						userDetails, null, userDetails.getAuthorities());

				// Es vincula la petició actual amb l'autenticació
				authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

				// S'estableix l'autenticació al context de seguretat
				SecurityContextHolder.getContext().setAuthentication(authentication);
			}
		} catch (Exception e) {
			logger.error("No es possible realitzar la autenticació: {}", e);
		}

		// Es continua amb l'execució normal de la petició
		filterChain.doFilter(request, response);
	}

	/**
	 * Extreu el token JWT de la capçalera HTTP "Authorization". Espera un format
	 * del tipus "Bearer <token>".
	 * 
	 * @param request Petició HTTP rebuda
	 * @return El token si és present i correcte, o null si no hi és
	 */
	private String parseJwt(HttpServletRequest request) {
		String headerAuth = request.getHeader("Authorization");

		if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer ")) {
			
			// retorna només el token, sense el prefix "Bearer"
			return headerAuth.substring(7, headerAuth.length());
		}
		return null;
	}

}
