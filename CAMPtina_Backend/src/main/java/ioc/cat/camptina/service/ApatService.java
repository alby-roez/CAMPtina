/**
 * 
 */
package ioc.cat.camptina.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ioc.cat.camptina.mapper.ApatMapper;
import ioc.cat.camptina.model.dto.ApatDTO;
import ioc.cat.camptina.model.entity.ApatEntity;
import ioc.cat.camptina.model.entity.CategoriaEntity;
import ioc.cat.camptina.repository.ApatRepository;
import ioc.cat.camptina.repository.CategoriaRepository;

/**
 * Classe service que integra la lògica de les crides a BBDD que es faran servir
 * en els controllers
 * 
 * @author Palmira
 * 
 */
@Service
public class ApatService {

	@Autowired
	private ApatRepository apatRepository;

	@Autowired
	private ApatMapper apatMapper;

	@Autowired
	private CategoriaRepository categoriaRepository;

	/**
	 * Mètode per retornar la llista d'àpats d'una categoria introduïda per
	 * paràmetre
	 * 
	 * @param categoriaId
	 * @return llista d'àpats per categoria
	 */
	public List<ApatDTO> findApatsByCategoria(int categoriaId) {
		List<ApatEntity> apats = apatRepository.findByCategoriaId(categoriaId);

		return apatMapper.listApatEntityToDto(apats);
	}

	/**
	 * Mètode per retornar la llista completa d'àpats
	 * 
	 * @return llista d'àpats
	 */
	public List<ApatDTO> findAllApats() {
		List<ApatEntity> apats = apatRepository.findAll();
		return apatMapper.listApatEntityToDto(apats);
	}

	/**
	 * Mètode per retornar el àpat corresponent a l'id introduït
	 * 
	 * @param id
	 * @return un àpat
	 */
	public ApatDTO findApatById(int id) {
		ApatEntity apatEntity = apatRepository.findById(id).orElseThrow(() -> new RuntimeException("Id no trobat"));
		return apatMapper.apatEntityToApatDto(apatEntity);

	}

	/**
	 * Mètode per crear un àpat nou
	 * 
	 * @param apatDto
	 * @return àpat creat
	 */
	public ApatDTO createApat(ApatDTO apatDto) {
		CategoriaEntity categoria = categoriaRepository.findById(apatDto.getCategoriaId())
				.orElseThrow(() -> new RuntimeException("Categoria no trobada"));
		ApatEntity apatEntity = apatMapper.apatDtoToApatEntity(apatDto);
		apatEntity.setCategoria(categoria);
		apatEntity = apatRepository.save(apatEntity);
		return apatMapper.apatEntityToApatDto(apatEntity);
	}

	/**
	 * Mètode per actualitzar un àpat introduït per paràmetre
	 * 
	 * @param id àpat
	 * @param apatDto
	 * @return àpat modificat
	 */
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

	/**
	 * Mètode que elimina l'àpat de l'id introduït
	 * 
	 * @param id àpat
	 */
	public void deleteApat(int id) {
		apatRepository.deleteById(id);
	}

}
