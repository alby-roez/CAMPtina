/**
 * 
 */
package ioc.cat.camptina.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ioc.cat.camptina.model.dto.ApatDTO;
import ioc.cat.camptina.service.ApatService;

/**
 * Classe controller amb CRUD complet
 */
@RestController
@RequestMapping("/api")
public class ApatController {

	@Autowired
	private ApatService apatService;

	@GetMapping("/apats")
	public List<ApatDTO> getAllApats() {
		return apatService.findAllApats();
	}

	@GetMapping("/apats/{id}")
	public ApatDTO getApatById(@PathVariable int id) {
		return apatService.findApatById(id);
	}

	

	@PostMapping
	public ApatDTO crearApat(@RequestBody ApatDTO apatDto) {
		return apatService.crearApat(apatDto);
	}

	@PutMapping("/{id}")
	public ApatDTO actualitzarApat(@PathVariable int id, @RequestBody ApatDTO apatDto) {
		return apatService.actualizarApat(id, apatDto);
	}

	@DeleteMapping("/{id}")
	public void eliminarApat(@PathVariable int id) {
		apatService.eliminarApat(id);
	}
}
