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
import ioc.cat.camptina.service.TornService;
import ioc.cat.camptina.model.dto.TornDTO;
/**
 * Classe controller per gestionar tots els endpoints del Torn
 */
@RestController
@RequestMapping("/api/torn")
public class TornController {

	@Autowired
	private TornService tornService;

	/**
	 * Endpoint que retorna tots els torns
	 * 
	 * @return llista de torns
	 */
	@GetMapping()
	public List<TornDTO> getAllTorns() {
		return tornService.getAllTorns();
	}

	/**
	 * Endpoint que retorna un torn introduït per id
	 * 
	 * @param id del torn
	 * @return un torn
	 */
	@GetMapping("{id}")
	public TornDTO getTornById(@PathVariable int id) {
		return tornService.getTornById(id);
	}

	/**
	 * Endpoint per a crear un torn
	 * 
	 * @param tornDto
	 * @return torn creat
	 */
	@PostMapping()
	@PreAuthorize("hasAuthority('GESTOR')")
	public TornDTO createTorn(@RequestBody TornDTO tornDto) {
		return tornService.createTorn(tornDto);
	}

	/**
	 * Endpoint per actualitza el torn de l'id introduït
	 * 
	 * @param id      torn
	 * @param tornDto
	 * @return torn modificat
	 */
	@PutMapping("{id}")
	@PreAuthorize("hasAuthority('GESTOR')")
	public TornDTO updateTorn(@PathVariable int id, @RequestBody TornDTO tornDto) {
		return tornService.updateTorn(id, tornDto);
	}

	/**
	 * Endpoint per eliminar el torn de l'id introduït
	 * 
	 * @param id torn
	 */
	@DeleteMapping("{id}")
	@PreAuthorize("hasAuthority('GESTOR')")
	public void deleteTorn(@PathVariable int id) {
		tornService.deleteTorn(id);
	}

}
