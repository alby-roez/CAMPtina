/**
 * 
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

	/**
	 * Endpoint per retornar la llista d'àpats
	 * 
	 * @return llista d'àpats
	 */
	@GetMapping("/apats")
	public List<ApatDTO> getAllApats() {
		return apatService.findAllApats();
	}

	/**
	 * Endpoint per retornar el àpat corresponent a l'id introduït
	 * 
	 * @param id àpat
	 * @return àpat
	 */
	@GetMapping("/apats/{id}")
	public ApatDTO getApatById(@PathVariable int id) {
		return apatService.findApatById(id);
	}

	/**
	 * Endpoint per retornar la llista d'àpats d'una categoria introduïda per
	 * paràmetre
	 * 
	 * @param categoria
	 * @return llista d'apats per categoria
	 */
	@GetMapping("/apats/categoria/{categoria}")
	public List<ApatDTO> getApatsByCategoria(@PathVariable int categoria) {
		List<ApatDTO> apats = apatService.findApatsByCategoria(categoria);
		return apats;
	}

	/**
	 * Endpoint per crear un àpat nou
	 * 
	 * @param apatDto
	 * @return àpat creat
	 */
	@PostMapping
	@PreAuthorize("hasAuthority('GESTOR')")
	public ApatDTO createApat(@RequestBody ApatDTO apatDto) {
		return apatService.createApat(apatDto);
	}

	/**
	 * Endpoint per actualitzar un àpat introduït per paràmetre
	 * 
	 * @param id      àpat
	 * @param apatDto
	 * @return àpat modificat
	 */
	@PutMapping("/{id}")
	@PreAuthorize("hasAuthority('GESTOR')")
	public ApatDTO updateApat(@PathVariable int id, @RequestBody ApatDTO apatDto) {
		return apatService.updateApat(id, apatDto);
	}

	/**
	 * Endpoint que elimina l'àpat de l'id introduït
	 * 
	 * @param id àpat
	 */
	@DeleteMapping("/{id}")
	@PreAuthorize("hasAuthority('GESTOR')")
	public void deleteApat(@PathVariable int id) {
		apatService.deleteApat(id);
	}
}
