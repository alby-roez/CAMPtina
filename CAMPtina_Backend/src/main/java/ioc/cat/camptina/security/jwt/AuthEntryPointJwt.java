package ioc.cat.camptina.security.jwt;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Classe que implementa AuthenticationEntryPoint i s'utilitza per gestionar els
 * intents d'accés no autoritzats en el sistema d'autenticació JWT
 * 
 * Quan un usuari intenta accedir a un recurs protegit sense estar autenticat
 * correctament, aquest component és invocat automàticament per SpringSecurity
 * per retornar una resposta personalitzada amb el codi d'error HTTP 401
 * (Unauthorized)
 * 
 * @author Palmira
 */
@Component
public class AuthEntryPointJwt implements AuthenticationEntryPoint {

	private static final Logger logger = LoggerFactory.getLogger(AuthEntryPointJwt.class);

	/**
	 * Aquest mètode s'executa automàticament quan SpringSecurity detecta un accés
	 * no autoritzar a una ruta protegida
	 * 
	 * @param request       L'objercte HttpServletRequest de la petició
	 * @param response      L'objecte HttpServletResponse per construïr la resposta
	 *                      HTTP
	 * @param authException L'excepció llançada per indicar la causa de
	 *                      l'autenticació fallida
	 * @throws IOException      En cas d'error d'entrada/sortida
	 * @throws ServletException En cas d'error relacionat amb el cicle de vida del
	 *                          servlet.
	 *
	 */
	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authException) throws IOException, ServletException {

		logger.error("Error no autoritzat: {}", authException.getMessage());

		response.setContentType(MediaType.APPLICATION_JSON_VALUE);
		response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

		final Map<String, Object> body = new HashMap<>();
		body.put("status", HttpServletResponse.SC_UNAUTHORIZED);
		body.put("error", "Unauthorized");
		body.put("message", authException.getMessage());
		body.put("path", request.getServletPath());

		final ObjectMapper mapper = new ObjectMapper();
		mapper.writeValue(response.getOutputStream(), body);

	}

}
