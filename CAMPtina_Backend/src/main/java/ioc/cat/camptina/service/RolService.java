package ioc.cat.camptina.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ioc.cat.camptina.mapper.RolMapper;
import ioc.cat.camptina.model.dto.RolDTO;
import ioc.cat.camptina.model.entity.RolEntity;
import ioc.cat.camptina.repository.RolRepository;

@Service
public class RolService {
	@Autowired
	private RolRepository rolRepository;

	@Autowired
	private RolMapper rolMapper;

	public List<RolDTO> getAllRols() {
		return rolRepository.findAll().stream().map(rolMapper::rolEntityToRolDTO).toList();
	}

	public RolDTO getRolById(int id) {
		RolEntity rol = rolRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Rol no trobat"));
		return rolMapper.rolEntityToRolDTO(rol);

	}

	public RolDTO createRol(RolDTO rolDto) {
		RolEntity rol = rolMapper.rolDTOToRolEntity(rolDto);
		rol = rolRepository.save(rol);
		return rolMapper.rolEntityToRolDTO(rol);
	}

	public RolDTO updateRol(int id, RolDTO categoriaDto) {
		RolEntity rol = rolRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Rol no trobat"));
		rol.setNom(categoriaDto.getNom());
		rol.setId(id);
		rol = rolRepository.save(rol);
		return rolMapper.rolEntityToRolDTO(rol);
	}

	public void deleteRol(int id) {
		rolRepository.deleteById(id);
	}
}
