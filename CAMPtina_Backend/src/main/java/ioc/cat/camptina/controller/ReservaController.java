package ioc.cat.camptina.controller;

import java.time.LocalDate;
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

import ioc.cat.camptina.model.dto.ReservaDTO;
import ioc.cat.camptina.service.ReservaService;

@RestController
@RequestMapping("/api/reserva")
public class ReservaController {

    @Autowired
    private ReservaService reservaService;

    @GetMapping()
    public List<ReservaDTO> getAllReserves() {
         return reservaService.getAllReserves();
    }

    @GetMapping("{id}")
    public ReservaDTO getReservaById(@PathVariable int id) {
        return reservaService.getReservaById(id);
    }

    @GetMapping("/usuari/{idUsuari}")
    public List<ReservaDTO> findReservaByIdUsuari(@PathVariable int idUsuari) {
        return reservaService.findReservaByIdUsuari(idUsuari);
    }

    @GetMapping("/data/{data}")
    public List<ReservaDTO> findReservaByData(@PathVariable LocalDate data) {
        return reservaService.findReservesByData(data);
    }   

    @PostMapping()
    public ReservaDTO createReserva(@RequestBody ReservaDTO reservaDto) {    
        return reservaService.createReserva(reservaDto);
    }   

    @PutMapping("{id}")
    public ReservaDTO updateReserva(@PathVariable int id, @RequestBody ReservaDTO reservaDto) {
        return reservaService.updateReserva(id, reservaDto); 
    } 

    @DeleteMapping("{id}")
    public void deleteReserva(@PathVariable int id) {
        reservaService.deleteReserva(id);
    }    
    
}
