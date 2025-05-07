package ioc.cat.camptina.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import ioc.cat.camptina.model.entity.UsuariEntity;
import ioc.cat.camptina.repository.UsuariRepository;

/**
 * Construeix una instància de UserDetailsImpl a partir d’una entitat
 * UsuariEntity. Assigna els rols com a autoritats de Spring Security.
 * 
 * Aquesta implementacó és necessària per a la integració amb Spring Security
 * 
 * @author Palmira
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UsuariRepository usuariRepository;

	/**
	 * Carrega un usuari pel seu correu electrònic.
	 * 
	 * @param email introduït per l'usuari en fer login
	 * @return Detalls de l'usuari com a instància de UserDetailsImpl
	 * @throws UsernameNotFoundException si no es troba cap usuari amb aquest email
	 */
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		UsuariEntity usuari = usuariRepository.findByEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("Usuari no trobat amb el email: " + email));
		return UserDetailsImpl.build(usuari);
	}

}
