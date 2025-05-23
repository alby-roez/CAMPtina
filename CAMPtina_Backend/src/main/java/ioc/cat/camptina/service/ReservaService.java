package ioc.cat.camptina.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ioc.cat.camptina.mapper.ReservaMapper;
import ioc.cat.camptina.mapper.MenuMapper;
import ioc.cat.camptina.mapper.ApatMapper;
import ioc.cat.camptina.model.dto.ApatDTO;
import ioc.cat.camptina.model.dto.CategoriaDTO;
import ioc.cat.camptina.model.dto.MenuDTO;
import ioc.cat.camptina.model.dto.ReservaDTO;
import ioc.cat.camptina.model.dto.ReservaDetallDTO;
import ioc.cat.camptina.model.entity.ApatEntity;
import ioc.cat.camptina.model.entity.MenuEntity;
import ioc.cat.camptina.model.entity.ReservaEntity;
import ioc.cat.camptina.model.entity.TornEntity;
import ioc.cat.camptina.model.entity.UsuariEntity;
import ioc.cat.camptina.repository.ApatRepository;
import ioc.cat.camptina.repository.MenuApatRepository;
import ioc.cat.camptina.repository.MenuRepository;
import ioc.cat.camptina.repository.ReservaRepository;
import ioc.cat.camptina.repository.TornRepository;
import ioc.cat.camptina.repository.UsuariRepository;

@Service
public class ReservaService {
	@Autowired
	private ReservaRepository reservaRepository;

	@Autowired
	private ReservaMapper reservaMapper;
	@Autowired
	private MenuMapper menuMapper;
	@Autowired
	private ApatMapper apatMapper;	

	@Autowired
	private UsuariRepository usuariRespository;
	@Autowired
	private TornRepository tornRepository;
	@Autowired
	private MenuRepository menuRepository;
	@Autowired
	private ApatRepository apatRepository;
	@Autowired
	private MenuApatRepository menuApatRepository;

	/**
	 * Mètode que retorna la primera reserva detallada del usuari amb el id
	 * introduït per paràmetre
	 * 
	 * @param idUsuari
	 * @return la primera reserva de l'usuari
	 */
	public ReservaDetallDTO obtenirReservaDetalladaPerUsuari(int idUsuari) {
		ReservaEntity reserva = reservaRepository.findFirstByUsuariId(idUsuari)
				.orElseThrow(() -> new RuntimeException("Reserva no trobada per l'usuari amb ID: " + idUsuari));
		return reservaMapper.toDetalladaDTO(reserva);
	}

	/**
	 * Mètode que retorna la llista per id de la reserva del usuari introduït per
	 * paràmetre
	 * 
	 * @param idUsuari
	 * @return llista de reserves per id d'usuari
	 */
	public List<ReservaDTO> findReservaByIdUsuari(int idUsuari) {
		List<ReservaEntity> reserva = reservaRepository.findReservaByUsuariId(idUsuari);
		return reservaMapper.listReservaEntityToDto(reserva);
	}

	/**
	 * Mètode que retorna totes les reserves amb informació detallada
	 * 
	 * @return llista de reserves completa
	 */
	public List<ReservaDetallDTO> getAllReserves() {
		return reservaRepository.findAll().stream().map(reservaMapper::toDetalladaDTO).toList();
	}

	/**
	 * Mètode que retorna una reserva per el seu id
	 * 
	 * @param id de la reserva
	 * @return la reserva
	 */
	public ReservaDTO getReservaById(int id) {
		ReservaEntity reservaEntity = reservaRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Reserva no trobada"));
		return reservaMapper.reservaEntityToReservaDto(reservaEntity);
	}

	public List<ReservaDTO> findReservesByData(LocalDate data) {
		return reservaRepository.findReservesByData(data).stream().map(reservaMapper::reservaEntityToReservaDto)
				.toList();
	}

	/**
	 * Mètode per crear una reserva nova
	 * 
	 * @param reservaDto
	 * @return reserva nova
	 */
	public ReservaDTO createReserva(ReservaDTO reservaDto) {
		UsuariEntity usuari = usuariRespository.findById(reservaDto.getIdUsuari())
				.orElseThrow(() -> new RuntimeException("Usuari no trobat"));

		TornEntity torn = tornRepository.findById(reservaDto.getIdTorn())
				.orElseThrow(() -> new RuntimeException("Torn no trobat"));

		MenuEntity menu = menuRepository.findById(reservaDto.getIdMenu())
				.orElseThrow(() -> new RuntimeException("Menú no trobat"));

		ApatEntity primer = apatRepository.findById(reservaDto.getIdPrimer())
				.orElseThrow(() -> new RuntimeException("Primer plat no trobat"));

		ApatEntity segon = apatRepository.findById(reservaDto.getIdSegon())
				.orElseThrow(() -> new RuntimeException("Segon plat no trobat"));

		ApatEntity postre = apatRepository.findById(reservaDto.getIdPostre())
				.orElseThrow(() -> new RuntimeException("Postre no trobat"));

		validacioApatPertanyCategoria(1, apatMapper.apatEntityToApatDto(primer));
		validacioApatPertanyMenu(menuMapper.menuEntityToMenuDTO(menu), apatMapper.apatEntityToApatDto(primer));
		validacioApatPertanyCategoria(2, apatMapper.apatEntityToApatDto(segon));
		validacioApatPertanyMenu(menuMapper.menuEntityToMenuDTO(menu), apatMapper.apatEntityToApatDto(segon));
		validacioApatPertanyCategoria(3, apatMapper.apatEntityToApatDto(postre));
		validacioApatPertanyMenu(menuMapper.menuEntityToMenuDTO(menu), apatMapper.apatEntityToApatDto(postre));

		ReservaEntity reservaEntity = reservaMapper.reservaDtoToReservaEntity(reservaDto);
		reservaEntity.setUsuari(usuari);
		reservaEntity.setTorn(torn);
		reservaEntity.setMenu(menu);
		reservaEntity.setPrimer(primer);
		reservaEntity.setSegon(segon);
		reservaEntity.setPostre(postre);
		reservaEntity.setData(reservaDto.getData());

		reservaEntity = reservaRepository.save(reservaEntity);
		return reservaMapper.reservaEntityToReservaDto(reservaEntity);
	}

	/**
	 * Mètode per actualitzar la reserva del id passat per paràmetre
	 * 
	 * @param id
	 * @param reservaDto
	 * @return reserva actualitzada
	 */
	public ReservaDTO updateReserva(int id, ReservaDTO reservaDto) {
		ReservaEntity reservaEntity = reservaRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Reserva no trobada"));
		UsuariEntity usuari = usuariRespository.findById(reservaDto.getIdUsuari())
				.orElseThrow(() -> new RuntimeException("Usuari no trobat"));
		TornEntity torn = tornRepository.findById(reservaDto.getIdTorn())
				.orElseThrow(() -> new RuntimeException("Torn no trobat"));
		MenuEntity menu = menuRepository.findById(reservaDto.getIdMenu())
				.orElseThrow(() -> new RuntimeException("Menú no trobat"));
		ApatEntity primer = apatRepository.findById(reservaDto.getIdPrimer())
				.orElseThrow(() -> new RuntimeException("Primer plat no trobat"));
		ApatEntity segon = apatRepository.findById(reservaDto.getIdSegon())
				.orElseThrow(() -> new RuntimeException("Segon plat no trobat"));
		ApatEntity postre = apatRepository.findById(reservaDto.getIdPostre())
				.orElseThrow(() -> new RuntimeException("Postre no trobat"));

		reservaEntity.setUsuari(usuari);
		reservaEntity.setTorn(torn);
		reservaEntity.setMenu(menu);
		reservaEntity.setPrimer(primer);
		reservaEntity.setSegon(segon);
		reservaEntity.setPostre(postre);
		reservaEntity.setData(reservaDto.getData());

		reservaRepository.save(reservaEntity);

		return reservaMapper.reservaEntityToReservaDto(reservaEntity);
	}

	/**
	 * Mètode per eliminar la reserva que correspon al id introduït per paràmetre
	 * 
	 * @param id
	 */
	public void deleteReserva(int id) {
		reservaRepository.deleteById(id);
		;
	}

	/**
	 * Mètode per validar que els àpats seleccionats pertanyen al menú seleccionat
	 * 
	 * @param menuDto
	 * @param apatDto
	 * @throws RuntimeException si l'àpat no pertany al menú
	 */
	private void validacioApatPertanyMenu(MenuDTO menuDto, ApatDTO apatDto) {
		menuApatRepository.findByMenuId(menuDto.getId()).stream()
				.filter(menuApat -> menuApat.getApat().getId() == apatDto.getId()).findFirst()
				.orElseThrow(() -> new RuntimeException("El menú no conté l'àpat seleccionat"));
	}

	/**
	 * Mètode per validar que els àpats seleccionats per categoria pertanyen a la categoria
	 * 
	 * @param apatDto
	 * @param categoriaDto
	 * @throws RuntimeException si l'àpat no pertany a la categoria
	 */
	private void validacioApatPertanyCategoria(Integer categoria, ApatDTO apatDto) {
		apatRepository.findByCategoriaId(categoria).stream()
				.filter(apat -> apat.getId() == apatDto.getId()).findFirst()
				.orElseThrow(() -> new RuntimeException("L'àpat no pertany a la categoria seleccionada"));
	}
}
