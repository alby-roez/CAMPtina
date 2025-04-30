package ioc.cat.camptina.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
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

@RestController
@RequestMapping("/api/usuaris")
@PreAuthorize("hasAuthority('GESTOR')")
public class UsuariController {

	@Autowired
	private UsuariService usuariService;
	
	@GetMapping()
	public List<UsuariDTO> getAllUsuaris() {
		return usuariService.findAllUsuaris();
	}
	
	@GetMapping("/{id}")
	public UsuariDTO getUsuariById(@PathVariable int id) {
		return usuariService.findUsuariById(id);
	}
	
	@PostMapping
	public UsuariDTO createUsuari(@RequestBody UsuariCreacioDTO usuariDto) {
		return usuariService.createUsuari(usuariDto);
	}
	
	@PutMapping("/{id}")
	public UsuariDTO updateUsuari(@PathVariable int id, @RequestBody UsuariCreacioDTO usuariDto) {
		return usuariService.updateUsuari(id, usuariDto);
	}
	
	@DeleteMapping("/{id}")
	public void deleteUsuari(@PathVariable int id) {
		usuariService.deleteUsuari(id);
	}
	
}
