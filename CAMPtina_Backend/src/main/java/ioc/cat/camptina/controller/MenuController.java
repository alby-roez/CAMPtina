/**
 * @author Palmira Romia Segura
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

import ioc.cat.camptina.model.dto.MenuDTO;
import ioc.cat.camptina.model.dto.MenuLlistaApatsDTO;
import ioc.cat.camptina.service.MenuService;

/**
 * @author Palmira
 */
@RestController
@RequestMapping("/api/menu")
@PreAuthorize("hasAuthority('GESTOR')")
public class MenuController {

	@Autowired
	private MenuService menuService;

	@GetMapping()
	public List<MenuDTO> getAllMenus() {
		return menuService.getAllMenus();
	}

	@GetMapping("{id}")
	public MenuDTO getMenuById(@PathVariable int id) {
		return menuService.getMenuById(id);
	}
	
	@GetMapping("/menu-complet/{id}")
	public MenuLlistaApatsDTO getMenuComplet(@PathVariable int id) {
		return menuService.getMenuAmbPlats(id);
	}

	@PostMapping()
	@PreAuthorize("hasAuthority('GESTOR')")
	public MenuDTO createMenu(@RequestBody MenuDTO menuDTO) {
		return menuService.crearMenu(menuDTO);
	}

	@PutMapping("{id}")
	@PreAuthorize("hasAuthority('GESTOR')")
	public MenuDTO updateMenu(@PathVariable int id, @RequestBody MenuDTO menuDTO) {
		return menuService.updateMenu(id, menuDTO);
	}

	@DeleteMapping("{id}")
	@PreAuthorize("hasAuthority('GESTOR')")
	public void deleteMenu(@PathVariable int id) {
		menuService.deleteMenu(id);
	}

}
