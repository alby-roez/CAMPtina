/**
 * 
 */
package ioc.cat.camptina.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ioc.cat.camptina.model.Entity.Apat;
import ioc.cat.camptina.model.dto.ApatDTO;
import ioc.cat.camptina.service.ApatServiceImpl;

/**
 * 
 */
@RestController
@RequestMapping("/api")
public class ApatController {

	@Autowired
	private ApatServiceImpl apatService;

	@GetMapping("/apats")
	public List<ApatDTO> getAllApats() {
		return apatService.findAllApats();
	}

	@GetMapping("/apats/{id}")
	public ApatDTO getApatById(@PathVariable int id) {
		return apatService.findApatById(id);
	}

	@GetMapping("/apats/categoria/{categoria}")
	public List<ApatDTO> getApatsByCategoria(@PathVariable int categoria) {
		return apatService.findApatsByCategoria(categoria);
	}
	
	@PostMapping
	public ApatDTO crearApat(@RequestBody ApatDTO apatDto) {
		return apatService.crearApat(apatDto);
	}
}
