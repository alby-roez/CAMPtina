package ioc.cat.camptina.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ioc.cat.camptina.mapper.TornMapper;
import ioc.cat.camptina.model.dto.TornDTO;
import ioc.cat.camptina.model.entity.TornEntity;
import ioc.cat.camptina.repository.TornRepository;

@Service
public class TornService {

    @Autowired
    //Repositori per accedir a la base de dades
    private TornRepository tornRepository;

    @Autowired
    //Mapper per convertir entre TornEntity i TornDTO
    private TornMapper tornMapper;

	public List<TornDTO> getAllTorns() {
        return tornRepository.findAll().stream()
                .map(tornMapper::tornEntityToTornDto)
                .toList();
    }

    public TornDTO getTornById(int id) {
        return tornRepository.findById(id)
                .map(tornMapper::tornEntityToTornDto)
                .orElseThrow(() -> new RuntimeException("Torn no trobat"));
    }
    public TornDTO createTorn(TornDTO tornDto) {
        TornEntity torn = tornMapper.tornDtoToTornEntity(tornDto);
        torn = tornRepository.save(torn);
        return tornMapper.tornEntityToTornDto(torn);    
    }

    public TornDTO updateTorn(int id, TornDTO tornDto) {
        TornEntity tornEntity = tornRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Torn no trobat"));
        tornEntity.setNom(tornDto.getNom());
        tornEntity.setHoraInici(tornDto.getHoraInici());
        tornEntity.setHoraFi(tornDto.getHoraFi());
        tornEntity.setAforament(tornDto.getAforament());
        tornEntity = tornRepository.save(tornEntity);
        return tornMapper.tornEntityToTornDto(tornEntity);
    }
    public void deleteTorn(int id) {
        tornRepository.deleteById(id);
    }

}
