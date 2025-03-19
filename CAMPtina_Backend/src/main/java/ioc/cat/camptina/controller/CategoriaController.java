/**
 * 
 */
package ioc.cat.camptina.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ioc.cat.camptina.model.dto.CategoriaDTO;
import ioc.cat.camptina.service.CategoriaService;

/**
 * 
 */
@RestController
@RequestMapping("/api")
public class CategoriaController {
	
	@Autowired
	private CategoriaService categoriaService;
	
	@GetMapping("/categories")
	public List<CategoriaDTO> getAllCategories(){
		return categoriaService.getAllCategories();
	}

}
