package ioc.cat.camptina.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import ioc.cat.camptina.model.dto.MenuApatDTO;
import ioc.cat.camptina.model.entity.MenuApatEntity;

/**
 * @author Palmira
 */
@Mapper(componentModel = "spring")
public interface MenuApatMapper {

	@Mapping(source = "menu.id", target = "menuId")
	@Mapping(source = "apat.id", target = "apatId")
	MenuApatDTO menuApatEntityToMenuApatDTO(MenuApatEntity entity);

	@Mapping(target = "menu", ignore = true)
	@Mapping(target = "apat", ignore = true)
	@Mapping(target = "id", expression = "java(new MenuApatId(dto.getMenuId(), dto.getApatId()))")
	MenuApatEntity menuApatDTOToMenuApatEntity(MenuApatDTO dto);

}
