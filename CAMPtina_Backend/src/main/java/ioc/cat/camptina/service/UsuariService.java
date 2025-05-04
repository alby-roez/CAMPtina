package ioc.cat.camptina.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import ioc.cat.camptina.mapper.UsuariMapper;
import ioc.cat.camptina.model.dto.UsuariCreacioDTO;
import ioc.cat.camptina.model.dto.UsuariDTO;
import ioc.cat.camptina.model.entity.RolEntity;
import ioc.cat.camptina.model.entity.UsuariEntity;
import ioc.cat.camptina.repository.RolRepository;
import ioc.cat.camptina.repository.UsuariRepository;

/**
 * Classe service que integra la lògica de les crides a BBDD que es faran servir
 * en els controllers
 */
@Service
public class UsuariService {

	@Autowired
	private UsuariRepository usuariRepository;

	@Autowired
	private UsuariMapper usuariMapper;

	@Autowired
	private RolRepository rolRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	/**
	 * Mètode per retornar la llista d'usuaris
	 * 
	 * @return llista d'usuaris
	 */
	public List<UsuariDTO> findAllUsuaris() {
		List<UsuariEntity> usuaris = usuariRepository.findAll();
		return usuariMapper.listUsuariEntityToDto(usuaris);
	}

	/**
	 * Mètode per retornar l'usuari corresponent a l'id introduït
	 * 
	 * @param id usuari
	 * @return usuari
	 */
	public UsuariDTO findUsuariById(int id) {
		UsuariEntity usuariEntity = usuariRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Usuari no trobat"));
		return usuariMapper.usuariEntityToUsuariDto(usuariEntity);
	}

	/**
	 * Mètode per crear un usuari nou
	 * 
	 * @param usuariDto
	 * @return usuari creat
	 */
	public UsuariDTO createUsuari(UsuariCreacioDTO usuariDto) {

		RolEntity rol = rolRepository.findById(usuariDto.getRolId())
				.orElseThrow(() -> new RuntimeException("Rol no trobat"));
		UsuariEntity usuariEntity = usuariMapper.toEntity(usuariDto);
		usuariEntity.setRol(rol);
		if (usuariDto.getContrasenya() != null && !usuariDto.getContrasenya().isEmpty()) {
			usuariEntity.setContrasenya(passwordEncoder.encode(usuariDto.getContrasenya()));
		} else {
			throw new RuntimeException("La contrasenya és obligatòria");
		}
		usuariEntity = usuariRepository.save(usuariEntity);
		return usuariMapper.usuariEntityToUsuariDto(usuariEntity);

	}

	/**
	 * Mètode per actualitzar un usuari introduït per paràmetre
	 * 
	 * @param id        usuari
	 * @param usuariDto
	 * @return usuari modificat
	 */
	public UsuariDTO updateUsuari(int id, UsuariCreacioDTO usuariDto) {
		UsuariEntity usuariEntity = usuariRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Usuari no trobat"));

		usuariEntity.setNom(usuariDto.getNom());
		usuariEntity.setCognom1(usuariDto.getCognom1());
		usuariEntity.setCognom2(usuariDto.getCognom2());
		RolEntity rol = rolRepository.findById(usuariDto.getRolId())
				.orElseThrow(() -> new RuntimeException("Rol no trobat"));
		usuariEntity.setRol(rol);
		usuariEntity.setEmail(usuariDto.getEmail());
		if (usuariDto.getContrasenya() != null && !usuariDto.getContrasenya().isEmpty()) {
			usuariEntity.setContrasenya(passwordEncoder.encode(usuariDto.getContrasenya()));
		}
		usuariEntity = usuariRepository.save(usuariEntity);
		return usuariMapper.usuariEntityToUsuariDto(usuariEntity);

	}

	/**
	 * Mètode que elimina l'usuari de l'id introduït
	 * 
	 * @param id usuari
	 */
	public void deleteUsuari(int id) {
		usuariRepository.deleteById(id);
	}

}
