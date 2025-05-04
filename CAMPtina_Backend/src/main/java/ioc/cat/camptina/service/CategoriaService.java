/**
 * 
 */
package ioc.cat.camptina.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ioc.cat.camptina.mapper.CategoriaMapper;
import ioc.cat.camptina.model.dto.CategoriaDTO;
import ioc.cat.camptina.model.entity.CategoriaEntity;
import ioc.cat.camptina.repository.CategoriaRepository;

/**
 * Classe service que integra la lògica de les crides a BBDD que es faran servir
 * en els controllers
 * 
 * @author Palmira
 */
@Service
public class CategoriaService {

	@Autowired
	private CategoriaRepository categoriaRepository;

	@Autowired
	private CategoriaMapper categoriaMapper;

	/**
	 * Mètode per retornar la llista de categories
	 * 
	 * @return llista de categories
	 */
	public List<CategoriaDTO> getAllCategories() {
		return categoriaRepository.findAll().stream().map(categoriaMapper::categoriaEntityToCategoriaDTO).toList();
	}

	/**
	 * Mètode per retornar la categoria corresponent a l'id introduït
	 * 
	 * @param id
	 * @return una categoria
	 */
	public CategoriaDTO getCategoriaById(int id) {
		CategoriaEntity categoria = categoriaRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Categoria no trobada"));
		return categoriaMapper.categoriaEntityToCategoriaDTO(categoria);

	}

	/**
	 * Mètode per crear una categoria nova
	 * 
	 * @param categoriaDto
	 * @return categoria creada
	 */
	public CategoriaDTO createCategoria(CategoriaDTO categoriaDto) {
		CategoriaEntity categoria = categoriaMapper.categoriaDTOToCategoriaEntity(categoriaDto);
		categoria = categoriaRepository.save(categoria);
		return categoriaMapper.categoriaEntityToCategoriaDTO(categoria);
	}

	/**
	 * Mètode per actualitzar la categoria introduïda per paràmetre
	 * 
	 * @param id           categoria
	 * @param categoriaDto
	 * @return categoria modificada
	 */
	public CategoriaDTO updateCategoria(int id, CategoriaDTO categoriaDto) {
		CategoriaEntity categoria = categoriaRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Categoria no trobada"));
		categoria.setNom(categoriaDto.getNom());
		categoria.setId(id);
		categoria = categoriaRepository.save(categoria);
		return categoriaMapper.categoriaEntityToCategoriaDTO(categoria);
	}

	/**
	 * Mètode que elimina la categoria de l'id introduït
	 * 
	 * @param id categoria
	 */
	public void deleteCategoria(int id) {
		categoriaRepository.deleteById(id);
	}

}
