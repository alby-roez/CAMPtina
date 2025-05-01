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
 * 
 */
@RestController
@RequestMapping("/api/categoria")
@PreAuthorize("hasAuthority('GESTOR')")
public class CategoriaController {

	@Autowired
	private CategoriaService categoriaService;

	@GetMapping("/categories")
	public List<CategoriaDTO> getAllCategories() {
		return categoriaService.getAllCategories();
	}

	@GetMapping("/categories/{id}")
	public CategoriaDTO getCategoriaById(@PathVariable int id) {
		return categoriaService.getCategoriaById(id);
	}

	@PostMapping()
	@PreAuthorize("hasAuthority('GESTOR')")
	public CategoriaDTO createCategoria(@RequestBody CategoriaDTO categoriaDto) {
		return categoriaService.createCategoria(categoriaDto);
	}

	@PutMapping("/{id}")
	@PreAuthorize("hasAuthority('GESTOR')")
	public CategoriaDTO updateCategoria(@PathVariable int id, @RequestBody CategoriaDTO categoriaDto) {
		return categoriaService.updateCategoria(id, categoriaDto);
	}

	@DeleteMapping("/{id}")
	@PreAuthorize("hasAuthority('GESTOR')")
	public void deleteCategoria(@PathVariable int id) {
		categoriaService.deleteCategoria(id);
	}

}
