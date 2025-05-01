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
 * @author Palmira
 */
@RestController
@RequestMapping("/api/menu-apat")
@PreAuthorize("hasAuthority('GESTOR')")
public class MenuApatController {

	@Autowired
	private MenuApatService menuApatService;

	@PostMapping
	public MenuApatDTO createMenuApat(@RequestBody MenuApatDTO menuApatDTO) {
		return menuApatService.createMenuApat(menuApatDTO);
	}

	@GetMapping
	public List<MenuApatDTO> getAllMenuApat() {
		return menuApatService.findAllMenuApats();
	}

	@DeleteMapping("/{menuId}/{apatId}")
	public void deleteMenuApat(@PathVariable int menuId, @PathVariable int apatId) {
		menuApatService.deleteMenuApat(menuId, apatId);
	}

}
