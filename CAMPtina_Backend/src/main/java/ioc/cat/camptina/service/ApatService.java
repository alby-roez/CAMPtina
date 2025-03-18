/**
 * 
 */
package ioc.cat.camptina.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ioc.cat.camptina.model.Entity.ApatEntity;
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

	public List<ApatDTO> findApatsByCategoria(int categoria) {
		List<ApatEntity> apats = apatRepository.findByCategoria(categoria);

		return apatMapper.listApatDto(apats);
	}

	public List<ApatDTO> findAllApats() {
		List<ApatEntity> apats = apatRepository.findAll();
		return apatMapper.listApatDto(apats);
	}

	public ApatDTO findApatById(int id) {
		ApatEntity apatEntity = apatRepository.findById(id).orElseThrow(() -> new RuntimeException("Id no trobat"));
		return apatMapper.apatToApatDto(apatEntity);

	}

	public ApatDTO crearApat(ApatDTO apatDto) {
		ApatEntity apatEntity = apatMapper.apatDtoToApat(apatDto);
		apatEntity = apatRepository.save(apatEntity);
		return apatMapper.apatToApatDto(apatEntity);
	}

	public ApatDTO actualizarApat(int id, ApatDTO apatDto) {
		ApatEntity apatEntity = apatRepository.findById(id).orElseThrow(() -> new RuntimeException("Apat no trobat"));
 
		apatEntity.setNom(apatDto.getNom());
		apatEntity.setDescripcio(apatDto.getDescripcio());
		apatEntity.setCategoria(apatDto.getCategoria());

		apatEntity = apatRepository.save(apatEntity);
		return apatMapper.apatToApatDto(apatEntity);

	}
	
	public void eliminarApat(int id) {
		apatRepository.deleteById(id);
	}

}
