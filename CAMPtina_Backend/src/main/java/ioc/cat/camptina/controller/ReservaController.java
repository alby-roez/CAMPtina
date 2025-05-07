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

/**
 * Classe controller per gestionar tots els endpoints de Reserva
 */
@RestController
@RequestMapping("/api/reserva")
public class ReservaController {

	@Autowired
	private ReservaService reservaService;

	/**
	 * 
	 * @return totes les reserves
	 */
	@GetMapping()
	public List<ReservaDetallDTO> getAllReserves() {
		return reservaService.getAllReserves();
	}

	/**
	 * 
	 * @param id de la reserva
	 * @return la reserva corresponent al id introduït
	 */
	@GetMapping("/{id}")
	public ReservaDTO getReservaById(@PathVariable int id) {
		return reservaService.getReservaById(id);
	}

	/**
	 * 
	 * @param idUsuari
	 * @return LLista de reserves de l'usuari introduït
	 */
	@GetMapping("/usuari/{idUsuari}")
	public List<ReservaDTO> findReservaByIdUsuari(@PathVariable int idUsuari) {
		return reservaService.findReservaByIdUsuari(idUsuari);
	}

	/**
	 * 
	 * @param idUsuari
	 * @return primera reserva detallada del usuari introduït
	 */
	@GetMapping("/reservausuari/{idUsuari}")
	public ResponseEntity<ReservaDetallDTO> obtenirReservaPerUsuari(@PathVariable int idUsuari) {
		ReservaDetallDTO dto = reservaService.obtenirReservaDetalladaPerUsuari(idUsuari);
		if (dto != null) {
			return ResponseEntity.ok(dto);
		} else {
			return ResponseEntity.noContent().build(); // o ResponseEntity.ok(null)
		}
	}

	/**
	 * 
	 * @param data
	 * @return retorn la llista de reserves per data introduïda
	 */
	@GetMapping("/data/{data}")
	public List<ReservaDTO> findReservaByData(@PathVariable LocalDate data) {
		return reservaService.findReservesByData(data);
	}

	/**
	 * 
	 * @param reservaDto
	 * @return reserva creada
	 */
	@PostMapping()
	public ReservaDTO createReserva(@RequestBody ReservaDTO reservaDto) {
		return reservaService.createReserva(reservaDto);
	}

	/**
	 * 
	 * @param id
	 * @param reservaDto
	 * @return reserva modificada
	 */
	@PutMapping("/{id}")
	public ReservaDTO updateReserva(@PathVariable int id, @RequestBody ReservaDTO reservaDto) {
		return reservaService.updateReserva(id, reservaDto);
	}

	/**
	 * 
	 * @param id
	 */
	@DeleteMapping("/{id}")
	public void deleteReserva(@PathVariable int id) {
		reservaService.deleteReserva(id);
	}

}
