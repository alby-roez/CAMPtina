package ioc.cat.camptina.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import ioc.cat.camptina.model.dto.MenuDTO;
import ioc.cat.camptina.model.entity.MenuEntity;

/**
 * Mapper que ens permet convertir els camps de l'entitat amb el DTO
 * 
 * @author Palmira
 */
@Mapper(componentModel = "spring")
public interface MenuMapper {

	MenuMapper INSTANCE = Mappers.getMapper(MenuMapper.class);

	MenuDTO menuEntityToMenuDTO(MenuEntity menuEntity);

	MenuEntity menuDTOToMenuEntity(MenuDTO menuDTO);

}
