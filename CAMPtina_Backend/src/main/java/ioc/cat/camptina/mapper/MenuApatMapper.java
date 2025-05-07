package ioc.cat.camptina.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import ioc.cat.camptina.model.dto.MenuApatDTO;
import ioc.cat.camptina.model.entity.MenuApatEntity;

/**
 * Interficie per mapejar els camps de l'Entitat amb el DTO
 * 
 * @author Palmira
 */
@Mapper(componentModel = "spring")
public interface MenuApatMapper {

	@Mapping(source = "menu.id", target = "menuId")
	@Mapping(source = "apat.id", target = "apatId")
	MenuApatDTO menuApatEntityToMenuApatDTO(MenuApatEntity entity);


}
