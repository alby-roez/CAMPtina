package ioc.cat.camptina.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ioc.cat.camptina.mapper.MenuApatMapper;
import ioc.cat.camptina.model.dto.MenuApatDTO;
import ioc.cat.camptina.model.entity.ApatEntity;
import ioc.cat.camptina.model.entity.MenuApatEntity;
import ioc.cat.camptina.model.entity.MenuApatId;
import ioc.cat.camptina.model.entity.MenuEntity;
import ioc.cat.camptina.repository.ApatRepository;
import ioc.cat.camptina.repository.MenuApatRepository;
import ioc.cat.camptina.repository.MenuRepository;

/**
 * @author Palmira
 */
@Service
public class MenuApatService {

	@Autowired
	private MenuApatRepository menuApatRepository;

	@Autowired
	private MenuRepository menuRepository;

	@Autowired
	private ApatRepository apatRepository;

	@Autowired
	private MenuApatMapper menuApatMapper;

	public MenuApatDTO createMenuApat(MenuApatDTO menuApatDTO) {

		MenuApatId id = new MenuApatId();
		
		id.setApatId(menuApatDTO.getApatId());
		id.setMenuId(menuApatDTO.getMenuId());
		
		MenuApatEntity menuApatEntity = new MenuApatEntity();
		menuApatEntity.setId(id);

		MenuEntity menuEntity = menuRepository.findById(menuApatDTO.getMenuId())
				.orElseThrow(() -> new RuntimeException("Menú no trobat"));
		ApatEntity apatEntity = apatRepository.findById(menuApatDTO.getApatId())
				.orElseThrow(() -> new RuntimeException("Apat no trobat"));

		menuApatEntity.setApat(apatEntity);
		menuApatEntity.setMenu(menuEntity);

		MenuApatEntity menuEntityGuardat = menuApatRepository.save(menuApatEntity);
		return menuApatMapper.menuApatEntityToMenuApatDTO(menuEntityGuardat);

	}

	public List<MenuApatDTO> findAllMenuApats() {

		return menuApatRepository.findAll().stream().map(menuApatMapper::menuApatEntityToMenuApatDTO)
				.collect(Collectors.toList());
	}

	public void deleteMenuApat(int menuId, int apatId) {
		menuApatRepository.deleteById(new MenuApatId(menuId, apatId));
	}

}
