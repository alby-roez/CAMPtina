/**
 * 
 */
package ioc.cat.camptina.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ioc.cat.camptina.model.Entity.CategoriaEntity;
import ioc.cat.camptina.model.dto.CategoriaDTO;
import ioc.cat.camptina.model.dto.CategoriaMapper;

/**
 * 
 */
@Service
public class CategoriaService {

	@Autowired
	private CategoriaRepository categoriaRepository;

	@Autowired
	private CategoriaMapper categoriaMapper;

	public List<CategoriaDTO> getAllCategories() {
		return categoriaRepository.findAll().stream().map(categoriaMapper::categoriaEntityToCategoriaDTO).toList();
	}

	public CategoriaDTO getCategoriaById(int id) {
		CategoriaEntity categoria = categoriaRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Categoria no trobada"));
		return categoriaMapper.categoriaEntityToCategoriaDTO(categoria);

	}

	public CategoriaDTO createCategoria(CategoriaDTO categoriaDto) {
		CategoriaEntity categoria = categoriaMapper.categoriaDTOToCategoriaEntity(categoriaDto);
		categoria = categoriaRepository.save(categoria);
		return categoriaMapper.categoriaEntityToCategoriaDTO(categoria);
	}

	public CategoriaDTO updateCategoria(int id, CategoriaDTO categoriaDto) {
		CategoriaEntity categoria = categoriaRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Categoria no trobada"));
		categoria.setNom(categoriaDto.getNom());
		categoria.setId(id);
		categoria = categoriaRepository.save(categoria);
		return categoriaMapper.categoriaEntityToCategoriaDTO(categoria);
	}

	public void deleteCategoria(int id) {
		categoriaRepository.deleteById(id);
	}

}
