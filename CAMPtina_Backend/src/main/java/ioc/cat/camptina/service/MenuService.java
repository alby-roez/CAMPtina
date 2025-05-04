package ioc.cat.camptina.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ioc.cat.camptina.mapper.ApatMapper;
import ioc.cat.camptina.mapper.MenuMapper;
import ioc.cat.camptina.model.dto.ApatDTO;
import ioc.cat.camptina.model.dto.MenuDTO;
import ioc.cat.camptina.model.dto.MenuLlistaApatsDTO;
import ioc.cat.camptina.model.entity.ApatEntity;
import ioc.cat.camptina.model.entity.MenuApatEntity;
import ioc.cat.camptina.model.entity.MenuEntity;
import ioc.cat.camptina.repository.MenuRepository;

/**
 * Classe service que integra la lògica de les crides a BBDD que es faran servir
 * en els controllers
 * 
 * @author Palmira
 */
@Service
public class MenuService {

	@Autowired
	private MenuRepository menuRepository;

	@Autowired
	private MenuMapper menuMapper;

	@Autowired
	ApatMapper apatMapper;

	/**
	 * Mètode que retorna la llista de tots els menús existents a la base de dades.
	 * 
	 * @return la llista de Menús
	 */
	public List<MenuDTO> getAllMenus() {
		return menuRepository.findAll().stream().map(menuMapper::menuEntityToMenuDTO).toList();
	}

	/**
	 * Mètode que mitjançant un id introduït per paràmetre retornarà el menú
	 * corresponent.
	 * 
	 * @param id
	 * @return menú
	 */
	public MenuDTO getMenuById(int id) {
		MenuEntity menuEntity = menuRepository.findById(id).orElseThrow(() -> new RuntimeException("Menú no trobat"));
		return menuMapper.menuEntityToMenuDTO(menuEntity);
	}

	/**
	 * Mètode que rep un MenuDTO i el crea a la base de dades
	 * 
	 * @param menuDTO
	 * @return menú nou creat
	 */
	public MenuDTO crearMenu(MenuDTO menuDTO) {
		MenuEntity menuEntity = menuMapper.menuDTOToMenuEntity(menuDTO);
		menuEntity = menuRepository.save(menuEntity);
		return menuMapper.menuEntityToMenuDTO(menuEntity);
	}

	/**
	 * Mètode que actualitza un menú existent a la base de dades, a partir d'un id i
	 * les noves dades pasades per paràmetre
	 * 
	 * @param id
	 * @param menuDTO
	 * @return menú actualitzat
	 */
	public MenuDTO updateMenu(int id, MenuDTO menuDTO) {
		MenuEntity menuEntity = menuRepository.findById(id).orElseThrow(() -> new RuntimeException("Menú no trobat"));
		menuEntity.setId(id);
		menuEntity.setNom(menuDTO.getNom());
		menuEntity.setPreu(menuDTO.getPreu());
		menuEntity.setActiu(menuDTO.getActiu());
		menuEntity = menuRepository.save(menuEntity);
		return menuMapper.menuEntityToMenuDTO(menuEntity);
	}

	/**
	 * Mètode per esborrar el menú del id passat per paràmetre.
	 * 
	 * @param id
	 */
	public void deleteMenu(int id) {
		menuRepository.deleteById(id);
	}

	/**
	 * Mètode que retorna el menú complet amb llista de plats i per categories,
	 * introduïnt el id per paràmetre
	 * 
	 * @param menuId
	 * @return menú complet
	 */
	public MenuLlistaApatsDTO getMenuAmbPlats(int menuId) {

		MenuEntity menuEntity = menuRepository.findById(menuId)
				.orElseThrow(() -> new RuntimeException("Menú no trobat"));

		Map<String, List<ApatDTO>> mapApatsDTO = new HashMap<>();

		for (MenuApatEntity ma : menuEntity.getMenuApatsEntity()) {
			ApatEntity apat = ma.getApat();
			String categoria = apat.getCategoria().getNom();
			mapApatsDTO.putIfAbsent(categoria, new ArrayList<>());
			mapApatsDTO.get(categoria).add(apatMapper.apatEntityToApatDto(apat));
		}

		MenuLlistaApatsDTO menuLlistaApatsDTO = new MenuLlistaApatsDTO();
		menuLlistaApatsDTO.setId(menuEntity.getId());
		menuLlistaApatsDTO.setNom(menuEntity.getNom());
		menuLlistaApatsDTO.setPreu(menuEntity.getPreu());
		menuLlistaApatsDTO.setApatsPerCategoria(mapApatsDTO);

		return menuLlistaApatsDTO;
	}

}
