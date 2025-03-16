/**
 * 
 */
package ioc.cat.camptina.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ioc.cat.camptina.model.Entity.ApatEntity;
import ioc.cat.camptina.model.dao.IApatDAO;
import ioc.cat.camptina.service.ApatServiceImpl;

/**
 * 
 */
@RestController
@RequestMapping("/api")
public class ApatController {

	@Autowired
	private IApatDAO iApatDao;
	
	@Autowired
	private ApatServiceImpl apatService;

	@GetMapping("/apats")
	public List<ApatEntity> getAllApats() {
		return iApatDao.findAll();
	}

	@GetMapping("/apats/{id}")
	public Optional<ApatEntity> getApatById(@PathVariable(name = "id") int id) {
		return iApatDao.findById(id);
	}

	@GetMapping("/apats/categoria/{categoria}")
	public List<ApatEntity> getApatsByCategoria(@PathVariable int categoria){
		return apatService.findApatsByCategoria(categoria);
	}
}
