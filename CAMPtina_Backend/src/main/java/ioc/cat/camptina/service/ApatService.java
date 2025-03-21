/**
 * 
 */
package ioc.cat.camptina.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ioc.cat.camptina.model.Entity.ApatEntity;
import ioc.cat.camptina.model.Entity.CategoriaEntity;
import ioc.cat.camptina.model.dto.ApatDTO;
import ioc.cat.camptina.model.dto.ApatMapper;

/**
 * Classe service
 */
@Service
public class ApatService {

	@Autowired
	private ApatRepository apatRepository;

	@Autowired
	private ApatMapper apatMapper;
	
	@Autowired
	private CategoriaRepository categoriaRepository;

	public List<ApatDTO> findApatsByCategoria(int categoriaId) {
		List<ApatEntity> apats = apatRepository.findByCategoria(categoriaId);

		return apatMapper.listApatEntityToDto(apats);
	}

	public List<ApatDTO> findAllApats() {
		List<ApatEntity> apats = apatRepository.findAll();
		return apatMapper.listApatEntityToDto(apats);
	}

	public ApatDTO findApatById(int id) {
		ApatEntity apatEntity = apatRepository.findById(id).orElseThrow(() -> new RuntimeException("Id no trobat"));
		return apatMapper.apatEntityToApatDto(apatEntity);

	}

	public ApatDTO createApat(ApatDTO apatDto) {
		CategoriaEntity categoria = categoriaRepository.findById(apatDto.getCategoriaId())
				.orElseThrow(() -> new RuntimeException("Categoria no trobada"));
		ApatEntity apatEntity = apatMapper.apatDtoToApatEntity(apatDto);
		apatEntity.setCategoria(categoria);
		apatEntity = apatRepository.save(apatEntity);
		return apatMapper.apatEntityToApatDto(apatEntity);
	}

	public ApatDTO updateApat(int id, ApatDTO apatDto) {
		ApatEntity apatEntity = apatRepository.findById(id).orElseThrow(() -> new RuntimeException("Apat no trobat"));

		apatEntity.setNom(apatDto.getNom());
		apatEntity.setDescripcio(apatDto.getDescripcio());
		CategoriaEntity categoria = categoriaRepository.findById(apatDto.getCategoriaId())
				.orElseThrow(() -> new RuntimeException("Categoria no trobada"));
		apatEntity.setCategoria(categoria);

		apatEntity = apatRepository.save(apatEntity);
		return apatMapper.apatEntityToApatDto(apatEntity);

	}
	
	public void deleteApat(int id) {
		apatRepository.deleteById(id);
	}

}
