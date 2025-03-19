/**
 * 
 */
package ioc.cat.camptina.model.dto;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import ioc.cat.camptina.model.Entity.ApatEntity;

/**
 * Mapper que ens permet convertir els camps de l'Entitat amb el DTO
 */
@Mapper(componentModel = "spring")
public interface ApatMapper {

	ApatMapper INSTANCE = Mappers.getMapper(ApatMapper.class);

	ApatDTO apatToApatDto(ApatEntity apatEntity);

	ApatEntity apatDtoToApat(ApatDTO apatDto);

	List<ApatDTO> listApatDto(List<ApatEntity> apats);
}
