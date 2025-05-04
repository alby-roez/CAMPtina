package ioc.cat.camptina.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ioc.cat.camptina.model.dto.ReservaDTO;
import ioc.cat.camptina.model.dto.ReservaDetallDTO;
import ioc.cat.camptina.service.ReservaService;

@RestController
@RequestMapping("/api/reserva")
public class ReservaController {

    @Autowired
    private ReservaService reservaService;

    @GetMapping()
    public List<ReservaDetallDTO> getAllReserves() {
         return reservaService.getAllReserves();
    }

    @GetMapping("/{id}")
    public ReservaDTO getReservaById(@PathVariable int id) {
        return reservaService.getReservaById(id);
    }

    @GetMapping("/usuari/{idUsuari}")
    public List<ReservaDTO> findReservaByIdUsuari(@PathVariable int idUsuari) {
        return reservaService.findReservaByIdUsuari(idUsuari);
    }
    
    @GetMapping("/reservausuari/{idUsuari}")
    public ResponseEntity<ReservaDetallDTO> obtenirReservaPerUsuari(@PathVariable int idUsuari) {
        ReservaDetallDTO dto = reservaService.obtenirReservaDetalladaPerUsuari(idUsuari);
        if (dto != null) {
            return ResponseEntity.ok(dto);
        } else {
            return ResponseEntity.noContent().build(); // o ResponseEntity.ok(null)
        }
    }

    @GetMapping("/data/{data}")
    public List<ReservaDTO> findReservaByData(@PathVariable LocalDate data) {
        return reservaService.findReservesByData(data);
    }   

    @PostMapping()
    public ReservaDTO createReserva(@RequestBody ReservaDTO reservaDto) {    
        return reservaService.createReserva(reservaDto);
    }   

    @PutMapping("/{id}")
    public ReservaDTO updateReserva(@PathVariable int id, @RequestBody ReservaDTO reservaDto) {
        return reservaService.updateReserva(id, reservaDto); 
    } 

    @DeleteMapping("/{id}")
    public void deleteReserva(@PathVariable int id) {
        reservaService.deleteReserva(id);
    }    
    
}
