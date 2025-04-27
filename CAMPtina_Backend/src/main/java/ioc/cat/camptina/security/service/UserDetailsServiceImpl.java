package ioc.cat.camptina.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import ioc.cat.camptina.model.entity.UsuariEntity;
import ioc.cat.camptina.repository.UsuariRepository;

/**
 * @author Palmira
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UsuariRepository usuariRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		UsuariEntity usuari = usuariRepository.findByEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("Usuari no trobat amb el email: " + email));
		return UserDetailsImpl.build(usuari);
	}

}
