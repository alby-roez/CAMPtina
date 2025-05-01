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

import ioc.cat.camptina.model.dto.RolDTO;
import ioc.cat.camptina.service.RolService;

@RestController
@RequestMapping("/api/rol")
@PreAuthorize("hasAuthority('GESTOR')")
public class RolController {
	
	@Autowired
	private RolService rolService;
	
	@GetMapping("/rols")
	public List<RolDTO> getAllRols(){
		return rolService.getAllRols();
	}
	
	@GetMapping("/rols/{id}")
	public RolDTO getRolById(@PathVariable int id){
		return rolService.getRolById(id);
	}
	
	@PostMapping()
	@PreAuthorize("hasAuthority('GESTOR')")
	public RolDTO createRol(@RequestBody RolDTO rolDto) {
		return rolService.createRol(rolDto);
	}
	
	@PutMapping("/{id}")
	@PreAuthorize("hasAuthority('GESTOR')")
	public RolDTO updateRol(@PathVariable int id, @RequestBody RolDTO rolDto) {
		return rolService.updateRol(id, rolDto);
	}
	
	@DeleteMapping("/{id}")
	@PreAuthorize("hasAuthority('GESTOR')")
	public void deleteRol(@PathVariable int id) {
		rolService.deleteRol(id);
	}
}
