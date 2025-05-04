package ioc.cat.camptina.mapper;

import org.mapstruct.Mapper;

import ioc.cat.camptina.model.dto.RolDTO;
import ioc.cat.camptina.model.entity.RolEntity;

/**
 * Interficie per mapejar els camps de l'Entitat amb el DTO
 */
@Mapper(componentModel = "Spring")
public interface RolMapper {
	
	RolDTO rolEntityToRolDTO(RolEntity rol);
	
	RolEntity rolDTOToRolEntity(RolDTO rol);
}
