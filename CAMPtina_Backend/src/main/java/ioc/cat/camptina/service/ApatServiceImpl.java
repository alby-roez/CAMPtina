/**
 * 
 */
package ioc.cat.camptina.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ioc.cat.camptina.model.Entity.Apat;
import ioc.cat.camptina.model.dto.ApatDTO;
import ioc.cat.camptina.model.dto.ApatMapper;

/**
 * 
 */
@Service
public class ApatServiceImpl {

	@Autowired
	private ApatRepository apatRepository;

	@Autowired
	private ApatMapper apatMapper;

	public List<ApatDTO> findApatsByCategoria(int categoria) {
		List<Apat> apats = apatRepository.findByCategoria(categoria);

		return apatMapper.listApatDto(apats);
	}

	public List<ApatDTO> findAllApats() {
		List<Apat> apats = apatRepository.findAll();
		return apatMapper.listApatDto(apats);
	}

	public ApatDTO findApatById(int id) {
		Apat apat = apatRepository.findById(id).orElseThrow(() -> new RuntimeException("Id no trobat"));
		return apatMapper.apatToApatDto(apat);

	}

	public ApatDTO crearApat(ApatDTO apatDto) {
		Apat apat = apatMapper.apatDtoToApat(apatDto);
		apat = apatRepository.save(apat);
		return apatMapper.apatToApatDto(apat);
	}

}
