package ioc.cat.camptina.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ioc.cat.camptina.model.dto.JwtResponseDTO;
import ioc.cat.camptina.model.dto.LoginDTO;
import ioc.cat.camptina.model.dto.UsuariCreacioDTO;
import ioc.cat.camptina.model.entity.RolEntity;
import ioc.cat.camptina.model.entity.UsuariEntity;
import ioc.cat.camptina.repository.RolRepository;
import ioc.cat.camptina.repository.UsuariRepository;
import ioc.cat.camptina.security.jwt.JwtTokenProvider;
import ioc.cat.camptina.security.service.UserDetailsImpl;
import jakarta.servlet.http.HttpServletRequest;

/**
 * @author Palmira
 */
@RestController
@RequestMapping("/api/auth")
public class LoginController {

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UsuariRepository usuariRepository;
	
	@Autowired
	private RolRepository rolRepository;

	@Autowired
	private JwtTokenProvider jwtUtils;
	
	@Autowired
	private PasswordEncoder encoder;

	public LoginController(AuthenticationManager authenticationManager, UsuariRepository usuariRepository, RolRepository rolRepository, PasswordEncoder encoder, JwtTokenProvider jwtUtils) {
		super();
		this.authenticationManager = authenticationManager;
		this.usuariRepository = usuariRepository;
		this.rolRepository = rolRepository;
		this.encoder = encoder;
		this.jwtUtils = jwtUtils;
	}


	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginDTO login) {
		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(login.getEmail(), login.getContrasenya()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generadorJwtToken(authentication);

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

		GrantedAuthority au = ((ArrayList<GrantedAuthority>) userDetails.getAuthorities()).get(0);

		return ResponseEntity
				.ok(new JwtResponseDTO(jwt, userDetails.getUsername(), userDetails.getId(), au.getAuthority(), userDetails.getNom(), userDetails.getCognom1()));

	}

	@GetMapping("/validate-jwt")
	public ResponseEntity<Boolean> validateJwt(HttpServletRequest request) {
		String jwt = request.getHeader("Authorization").replace("Bearer ", "");
		return ResponseEntity.ok(this.jwtUtils.validarJwtToken(jwt));
	}
	
	@PostMapping("/crear-usuari")
	@PreAuthorize("hasAuthority('GESTOR')")
	public ResponseEntity<?> registerUser(@RequestBody UsuariCreacioDTO usuariDto){
		Optional<UsuariEntity> usuariEntrant = usuariRepository.findByEmail(usuariDto.getEmail());
		if(!usuariEntrant.isEmpty()) {
			return ResponseEntity.badRequest().body("Error: Aquest email ja existeix!");
		}
		//Create new user's account
		UsuariEntity usuari = new UsuariEntity();
		RolEntity rol = rolRepository.findById(usuariDto.getRolId())
				.orElseThrow(() -> new RuntimeException("Rol no trobat"));
		usuari.setNom(usuariDto.getNom());
		usuari.setCognom1(usuariDto.getCognom1());
		usuari.setCognom2(usuariDto.getCognom2());
		usuari.setEmail(usuariDto.getEmail());
		usuari.setContrasenya(encoder.encode(usuariDto.getContrasenya()));
		usuari.setRol(rol);
		this.usuariRepository.save(usuari);
		return ResponseEntity.ok("Usuari creat!");
	}

}
