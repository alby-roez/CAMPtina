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

/**Controller per gestionar els endpoints de la entitat Menú
 * @author Palmira
 */
@RestController
@RequestMapping("/api/menu")
public class MenuController {

	@Autowired
	private MenuService menuService;

	/**
	 * 
	 * @return llista completa de menús
	 */
	@GetMapping()
	public List<MenuDTO> getAllMenus() {
		return menuService.getAllMenus();
	}

	/**
	 * 
	 * @param id
	 * @return el menú corresponent a l'id introduït
	 */
	@GetMapping("{id}")
	public MenuDTO getMenuById(@PathVariable int id) {
		return menuService.getMenuById(id);
	}
	
	/**
	 * 
	 * @param id
	 * @return menú complet corresponent a l'id introduït
	 */
	@GetMapping("/menu-complet/{id}")
	public MenuLlistaApatsDTO getMenuComplet(@PathVariable int id) {
		return menuService.getMenuAmbPlats(id);
	}

	/**
	 * 
	 * @param menuDTO
	 * @return menú creat
	 */
	@PostMapping()
	@PreAuthorize("hasAuthority('GESTOR')")
	public MenuDTO createMenu(@RequestBody MenuDTO menuDTO) {
		return menuService.crearMenu(menuDTO);
	}

	/**
	 * 
	 * @param id
	 * @param menuDTO
	 * @return menú modificat
	 */
	@PutMapping("{id}")
	@PreAuthorize("hasAuthority('GESTOR')")
	public MenuDTO updateMenu(@PathVariable int id, @RequestBody MenuDTO menuDTO) {
		return menuService.updateMenu(id, menuDTO);
	}

	/**
	 * Endpoint per eliminar el menú corresponent a l'id introduït
	 * @param id
	 */
	@DeleteMapping("{id}")
	@PreAuthorize("hasAuthority('GESTOR')")
	public void deleteMenu(@PathVariable int id) {
		menuService.deleteMenu(id);
	}

}
