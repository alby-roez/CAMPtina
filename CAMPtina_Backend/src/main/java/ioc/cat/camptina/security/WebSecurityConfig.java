package ioc.cat.camptina.security;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import ioc.cat.camptina.security.jwt.AuthEntryPointJwt;
import ioc.cat.camptina.security.jwt.JwtAuthenticationFilter;
import ioc.cat.camptina.security.service.UserDetailsServiceImpl;
import jakarta.servlet.http.HttpServletRequest;

/**
 * 
 */
public class WebSecurityConfig {

	@Autowired
	private UserDetailsServiceImpl userDetailsService;

	@Autowired
	private AuthEntryPointJwt unauthorizedHandler;

	@Bean
	JwtAuthenticationFilter authenticationJwtTokenFilter() {
		return new JwtAuthenticationFilter();
	}

	@Bean
	DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

		authProvider.setUserDetailsService(userDetailsService);
		authProvider.setPasswordEncoder(passwordEncoder());

		return authProvider;
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.cors(cors -> cors.configurationSource(new CorsConfig())).csrf(csrf -> csrf.disable())
				.exceptionHandling(handling -> handling.authenticationEntryPoint(unauthorizedHandler))
				.sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.authorizeHttpRequests(
						requests -> requests.requestMatchers("/api/auth/**").permitAll().anyRequest().authenticated());

		http.authenticationProvider(this.authenticationProvider());
		http.addFilterBefore(this.authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
		return http.build();

	}

	private class CorsConfig implements CorsConfigurationSource {

		public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
			CorsConfiguration corsConfiguration = new CorsConfiguration();
			corsConfiguration.setAllowedOrigins(List.of("http://localhost:3000"));
			corsConfiguration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
			corsConfiguration.setAllowedHeaders(List.of("*"));
			corsConfiguration.setAllowCredentials(true);
			return corsConfiguration;
		}
	}
}
