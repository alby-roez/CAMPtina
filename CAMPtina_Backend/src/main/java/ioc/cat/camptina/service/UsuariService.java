package ioc.cat.camptina.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ioc.cat.camptina.mapper.UsuariMapper;
import ioc.cat.camptina.model.dto.UsuariDTO;
import ioc.cat.camptina.model.entity.RolEntity;
import ioc.cat.camptina.model.entity.UsuariEntity;
import ioc.cat.camptina.repository.RolRepository;
import ioc.cat.camptina.repository.UsuariRepository;

@Service
public class UsuariService {

	@Autowired
	private UsuariRepository usuariRepository;
	
	@Autowired
	private UsuariMapper  usuariMapper;
	
	@Autowired
	private RolRepository rolRepository;

   
	public List<UsuariDTO> findAllUsuaris() {
		List<UsuariEntity> usuaris = usuariRepository.findAll();
		return usuariMapper.listUsuariEntityToDto(usuaris);
	}
	
	public UsuariDTO findUsuariById(int id) {
        UsuariEntity usuariEntity = usuariRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Usuari no trobat"));
        return usuariMapper.usuariEntityToUsuariDto(usuariEntity);
    }
	
	public UsuariDTO createUsuari(UsuariDTO usuariDto) {
            
        RolEntity rol = rolRepository.findById(usuariDto.getRolId()).orElseThrow(() -> new RuntimeException("Rol no trobat"));
        UsuariEntity usuariEntity = usuariMapper.usuariDtoToUsuariEntity(usuariDto);
        usuariEntity.setRol(rol);
        usuariEntity = usuariRepository.save(usuariEntity);
        return usuariMapper.usuariEntityToUsuariDto(usuariEntity);
        
    }
	
	public UsuariDTO updateUsuari(int id, UsuariDTO usuariDto) {
		UsuariEntity usuariEntity = usuariRepository.findById(id).orElseThrow(() -> new RuntimeException("Usuari no trobat"));
		
		usuariEntity.setNom(usuariDto.getNom());
		usuariEntity.setCognom1(usuariEntity.getCognom1());
		usuariEntity.setCognom2(usuariEntity.getCognom2());
		RolEntity rol = rolRepository.findById(usuariDto.getRolId()).orElseThrow(() -> new RuntimeException("Rol no trobat"));
		usuariEntity.setRol(rol);   
		usuariEntity = usuariRepository.save(usuariEntity);
		return usuariMapper.usuariEntityToUsuariDto(usuariEntity);
				
	}
	
	public void deleteUsuari(int id) {
		usuariRepository.deleteById(id);
	}
	
	
	
}
