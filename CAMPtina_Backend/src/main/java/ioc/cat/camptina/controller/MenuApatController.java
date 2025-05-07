package ioc.cat.camptina.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ioc.cat.camptina.model.dto.MenuApatDTO;
import ioc.cat.camptina.service.MenuApatService;

/**
 * Classe controller per gestionar tots els endpoints per a menu-apat
 * 
 * @author Palmira
 */
@RestController
@RequestMapping("/api/menu-apat")
public class MenuApatController {

	@Autowired
	private MenuApatService menuApatService;

	/**
	 * Endpoint per crear un MenuÀpat
	 * 
	 * @param menuApatDTO
	 * @return MenuÀpat creat
	 */
	@PostMapping
	@PreAuthorize("hasAuthority('GESTOR')")
	public MenuApatDTO createMenuApat(@RequestBody MenuApatDTO menuApatDTO) {
		return menuApatService.createMenuApat(menuApatDTO);
	}

	/**
	 * Endpoint que retorna tots els MenuÀpats
	 * 
	 * @return llista menuApats
	 */
	@GetMapping
	public List<MenuApatDTO> getAllMenuApat() {
		return menuApatService.findAllMenuApats();
	}

	/**
	 * Endpoint per eliminar un menuApat introduïnt el id del menú i el id del Àpat
	 * 
	 * @param menuId
	 * @param apatId
	 */
	@DeleteMapping("/{menuId}/{apatId}")
	@PreAuthorize("hasAuthority('GESTOR')")
	public void deleteMenuApat(@PathVariable int menuId, @PathVariable int apatId) {
		menuApatService.deleteMenuApat(menuId, apatId);
	}

}
