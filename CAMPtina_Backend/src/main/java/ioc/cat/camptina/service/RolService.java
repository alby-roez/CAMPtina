package ioc.cat.camptina.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ioc.cat.camptina.mapper.RolMapper;
import ioc.cat.camptina.model.dto.RolDTO;
import ioc.cat.camptina.model.entity.RolEntity;
import ioc.cat.camptina.repository.RolRepository;

/**
 * Classe service que integra la lògica de les crides a BBDD que es faran servir
 * en els controllers
 */
@Service
public class RolService {
	@Autowired
	private RolRepository rolRepository;

	@Autowired
	private RolMapper rolMapper;

	/**
	 * Mètode per retornar la llista de rols
	 * 
	 * @return llista de rols
	 */
	public List<RolDTO> getAllRols() {
		return rolRepository.findAll().stream().map(rolMapper::rolEntityToRolDTO).toList();
	}

	/**
	 * Mètode per retornar el rol corresponent a l'id introduït
	 * 
	 * @param id rol
	 * @return un rol
	 */
	public RolDTO getRolById(int id) {
		RolEntity rol = rolRepository.findById(id).orElseThrow(() -> new RuntimeException("Rol no trobat"));
		return rolMapper.rolEntityToRolDTO(rol);

	}

	/**
	 * Mètode per crear un rol nou
	 * 
	 * @param rolDto
	 * @return rol creat
	 */
	public RolDTO createRol(RolDTO rolDto) {
		RolEntity rol = rolMapper.rolDTOToRolEntity(rolDto);
		rol = rolRepository.save(rol);
		return rolMapper.rolEntityToRolDTO(rol);
	}

	/**
	 * Mètode per actualitzar un rol introduït per paràmetre
	 * 
	 * @param id           rol
	 * @param categoriaDto
	 * @return rol modificat
	 */
	public RolDTO updateRol(int id, RolDTO categoriaDto) {
		RolEntity rol = rolRepository.findById(id).orElseThrow(() -> new RuntimeException("Rol no trobat"));
		rol.setNom(categoriaDto.getNom());
		rol.setId(id);
		rol = rolRepository.save(rol);
		return rolMapper.rolEntityToRolDTO(rol);
	}

	/**
	 * Mètode que elimina el rol de l'id introduït
	 * 
	 * @param id rol
	 */
	public void deleteRol(int id) {
		rolRepository.deleteById(id);
	}
}
