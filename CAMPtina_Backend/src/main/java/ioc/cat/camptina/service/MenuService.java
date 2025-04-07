package ioc.cat.camptina.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ioc.cat.camptina.mapper.MenuMapper;
import ioc.cat.camptina.model.dto.MenuDTO;
import ioc.cat.camptina.model.entity.MenuEntity;
import ioc.cat.camptina.repository.MenuRepository;

/**
 * Service per mapejar tots els mètodes del CRUD de la entitat Menú.
 * 
 * @author Palmira
 */
@Service
public class MenuService {

	@Autowired
	private MenuRepository menuRepository;

	@Autowired
	private MenuMapper menuMapper;

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

}
