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

import ioc.cat.camptina.model.dto.UsuariCreacioDTO;
import ioc.cat.camptina.model.dto.UsuariDTO;
import ioc.cat.camptina.service.UsuariService;

/**
 * Classe controller per gestionar tots els endpoints de l'usuari
 */
@RestController
@RequestMapping("/api/usuaris")
@PreAuthorize("hasAuthority('GESTOR')")
public class UsuariController {

	@Autowired
	private UsuariService usuariService;

	/**
	 * Endpoint que retorna tots els usuaris
	 * 
	 * @return llista d'usuaris
	 */
	@GetMapping()
	public List<UsuariDTO> getAllUsuaris() {
		return usuariService.findAllUsuaris();
	}

	/**
	 * Endpoint per buscar l'usuari corresponent a l'id actualitzat
	 * 
	 * @param id usuari
	 * @return usuari
	 */
	@GetMapping("/{id}")
	public UsuariDTO getUsuariById(@PathVariable int id) {
		return usuariService.findUsuariById(id);
	}

	/**
	 * Endpoint per a crear un usuari
	 * 
	 * @param usuariDto
	 * @return usuari creat
	 */
	@PostMapping
	public UsuariDTO createUsuari(@RequestBody UsuariCreacioDTO usuariDto) {
		return usuariService.createUsuari(usuariDto);
	}

	/**
	 * Endpoint per a actualitzar l'usuari corresponent a l'id introduït
	 * 
	 * @param id        usuari
	 * @param usuariDto
	 * @return usuari
	 */
	@PutMapping("/{id}")
	public UsuariDTO updateUsuari(@PathVariable int id, @RequestBody UsuariCreacioDTO usuariDto) {
		return usuariService.updateUsuari(id, usuariDto);
	}

	/**
	 * Endpoint per eliminar l'usuari corresponent a l'id introduït
	 * 
	 * @param id usuari
	 */
	@DeleteMapping("/{id}")
	public void deleteUsuari(@PathVariable int id) {
		usuariService.deleteUsuari(id);
	}

}
