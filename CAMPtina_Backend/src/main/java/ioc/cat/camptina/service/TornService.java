package ioc.cat.camptina.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ioc.cat.camptina.mapper.TornMapper;
import ioc.cat.camptina.model.dto.TornDTO;
import ioc.cat.camptina.model.entity.TornEntity;
import ioc.cat.camptina.repository.TornRepository;

/**
 * Classe service que integra la lògica de les crides a BBDD que es faran servir
 * en els controllers
 */
@Service
public class TornService {

	@Autowired
	// Repositori per accedir a la base de dades
	private TornRepository tornRepository;

	@Autowired
	// Mapper per convertir entre TornEntity i TornDTO
	private TornMapper tornMapper;

	/**
	 * Mètode per retornar la llista completa de torns
	 * 
	 * @return llista de torns
	 */
	public List<TornDTO> getAllTorns() {
		return tornRepository.findAll().stream().map(tornMapper::tornEntityToTornDto).toList();
	}

	/**
	 * Mètode per retornar el torn corresponent a l'id introduït
	 * 
	 * @param id torn
	 * @return un torn
	 */
	public TornDTO getTornById(int id) {
		return tornRepository.findById(id).map(tornMapper::tornEntityToTornDto)
				.orElseThrow(() -> new RuntimeException("Torn no trobat"));
	}

	/**
	 * Mètode per crear un torn nou
	 * 
	 * @param tornDto
	 * @return torn creat
	 */
	public TornDTO createTorn(TornDTO tornDto) {
		validacioHoraIniciFiTorn(tornDto);
		TornEntity torn = tornMapper.tornDtoToTornEntity(tornDto);
		torn = tornRepository.save(torn);
		return tornMapper.tornEntityToTornDto(torn);
	}

	/**
	 * Mètode per actualitzar un torn introduït per paràmetre
	 * 
	 * @param id      torn
	 * @param tornDto
	 * @return torn modificat
	 */
	public TornDTO updateTorn(int id, TornDTO tornDto) {
		validacioHoraIniciFiTorn(tornDto);
		TornEntity tornEntity = tornRepository.findById(id).orElseThrow(() -> new RuntimeException("Torn no trobat"));
		tornEntity.setNom(tornDto.getNom());
		tornEntity.setHoraInici(tornDto.getHoraInici());
		tornEntity.setHoraFi(tornDto.getHoraFi());
		tornEntity.setAforament(tornDto.getAforament());
		tornEntity = tornRepository.save(tornEntity);
		return tornMapper.tornEntityToTornDto(tornEntity);
	}

	/**
	 * Mètode que elimina el torn de l'id introduït
	 * 
	 * @param id torn
	 */
	public void deleteTorn(int id) {
		tornRepository.deleteById(id);
	}

	/**
	 * Mètode per validar que l'hora d'inici sigui anterior a l'hora de fi
	 * 
	 * @param tornDto
	 */
	private void validacioHoraIniciFiTorn(TornDTO tornDto) {
		if (!tornDto.getHoraInici().isBefore(tornDto.getHoraFi())) {
			throw new IllegalArgumentException("L'hora d'inici ha de ser anterior a l'hora de fi.");
		}
	}

}
