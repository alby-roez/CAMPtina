/**
 * 
 */
package ioc.cat.camptina.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ioc.cat.camptina.model.dto.CategoriaDTO;
import ioc.cat.camptina.service.CategoriaService;

/**
 * Classe controller per gestionar els endpoints de la categoria
 * 
 * @author Palmira
 */
@RestController
@RequestMapping("/api/categoria")
public class CategoriaController {

	@Autowired
	private CategoriaService categoriaService;

	/**
	 * Endpoint per retornar la llista de categories
	 * 
	 * @return llista de categories
	 */
	@GetMapping("/categories")
	public List<CategoriaDTO> getAllCategories() {
		return categoriaService.getAllCategories();
	}

	/**
	 * Endpoint per retornar la categoria corresponent a l'id introduït
	 * 
	 * @param id categoria
	 * @return categoria
	 */
	@GetMapping("/categories/{id}")
	public CategoriaDTO getCategoriaById(@PathVariable int id) {
		return categoriaService.getCategoriaById(id);
	}

	/**
	 * Endpoint per crear una categoria nova
	 * 
	 * @param categoriaDto
	 * @return categoria creada
	 */
	@PostMapping()
	@PreAuthorize("hasAuthority('GESTOR')")
	public CategoriaDTO createCategoria(@RequestBody CategoriaDTO categoriaDto) {
		return categoriaService.createCategoria(categoriaDto);
	}

	/**
	 * Mètode per actualitzar la categoria introduïda per paràmetre
	 * 
	 * @param id           categoria
	 * @param categoriaDto
	 * @return categoria modificada
	 */
	@PutMapping("/{id}")
	@PreAuthorize("hasAuthority('GESTOR')")
	public CategoriaDTO updateCategoria(@PathVariable int id, @RequestBody CategoriaDTO categoriaDto) {
		return categoriaService.updateCategoria(id, categoriaDto);
	}

	/**
	 * Endpoint que elimina la categoria de l'id introduït
	 * 
	 * @param id categoria
	 */
	@DeleteMapping("/{id}")
	@PreAuthorize("hasAuthority('GESTOR')")
	public void deleteCategoria(@PathVariable int id) {
		categoriaService.deleteCategoria(id);
	}

}
