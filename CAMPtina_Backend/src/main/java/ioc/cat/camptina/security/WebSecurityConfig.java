package ioc.cat.camptina.security;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import ioc.cat.camptina.security.jwt.AuthEntryPointJwt;
import ioc.cat.camptina.security.jwt.JwtAuthenticationFilter;
import ioc.cat.camptina.security.service.UserDetailsServiceImpl;

/**
 * Classe de configuració de Spring Security.
 * 
 * Defineix la configuració de seguretat de l'aplicació: 
 * - Autenticació basada en JWT 
 * - Gestió de CORS 
 * - Control d'accessos a les rutes 
 * - Tractament d'errors d'autenticació
 * 
 * @author Palmira
 */
@Configuration
@EnableMethodSecurity
public class WebSecurityConfig {

	@Autowired
	private UserDetailsServiceImpl userDetailsService;

	@Autowired
	private AuthEntryPointJwt unauthorizedHandler;

	/**
	 * Bean que proporciona el filtre d'autenticació JWT per analitzar les peticions
	 * entrants.
	 */
	@Bean
	JwtAuthenticationFilter authenticationJwtTokenFilter() {
		return new JwtAuthenticationFilter();
	}

	/**
	 * Bean que configura el proveïdor d’autenticació basat en la base de dades.
	 * S’utilitza per verificar l’usuari i la contrasenya.
	 */
	@Bean
	DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

		authProvider.setUserDetailsService(userDetailsService);
		authProvider.setPasswordEncoder(passwordEncoder());
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return authProvider;
	}

	/**
	 * Bean per codificar contrasenyes amb l'algorisme BCrypt.
	 */
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	/**
	 * Bean per obtenir l'AuthenticationManager, necessari per autenticar usuaris
	 * manualment.
	 */
	@Bean
	AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
		return authConfig.getAuthenticationManager();
	}
	
	/**
	 * Defineix la cadena de filtres de seguretat:
	 * - Desactiva CSRF
	 * - Habilita CORS
	 * - Defineix rutes públiques i protegides
	 * - Afegeix el filtre JWT abans del filtre d’autenticació per defecte
	 */
	@Bean
	SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

		http.cors(cors -> cors.configurationSource(corsConfigurationSource())).csrf(csrf -> csrf.disable())
				.exceptionHandling(handling -> handling.authenticationEntryPoint(unauthorizedHandler))
				.sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.authorizeHttpRequests(
						requests -> requests.requestMatchers("/api/auth/**").permitAll().anyRequest().authenticated());
		http.authenticationProvider(this.authenticationProvider());
		http.addFilterBefore(this.authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);

		return http.build();

	}

	/**
	 * Configura les regles CORS per permetre comunicació amb el frontend. Defineix
	 * orígens permesos, mètodes i headers.
	 */
	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration corsConfiguration = new CorsConfiguration();
		corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:3000", "http://localhost:5173",
				"http://localhost:4200", "http://localhost:8080"));
		corsConfiguration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
		corsConfiguration.setAllowedHeaders(List.of("*"));
		corsConfiguration.setAllowCredentials(true);

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", corsConfiguration);
		return source;
	}

}
