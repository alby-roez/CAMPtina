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
@RestController
@RequestMapping("/api/torn")
public class TornController {

    @Autowired
    private TornService tornService;
    

    @GetMapping()
    public List<TornDTO> getAllTorns() {
         return tornService.getAllTorns();
    }
    
    @GetMapping("{id}")
    public TornDTO getTornById(@PathVariable int id) {
        return tornService.getTornById(id);
    }

    @PostMapping()
    @PreAuthorize("hasAuthority('GESTOR')")
    public TornDTO createTorn(@RequestBody TornDTO tornDto) {
        return tornService.createTorn(tornDto);
    }

    @PutMapping("{id}")
    @PreAuthorize("hasAuthority('GESTOR')")
    public TornDTO updateTorn(@PathVariable int id, @RequestBody TornDTO tornDto) {
        return tornService.updateTorn(id, tornDto);
    }
    
    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('GESTOR')")
    public void deleteTorn(@PathVariable int id) {
        tornService.deleteTorn(id);
    }

}
