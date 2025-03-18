/**
 * 
 */
package ioc.cat.camptina.model.dto;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import ioc.cat.camptina.model.Entity.Apat;

/**
 * 
 */
@Mapper(componentModel = "spring")
public interface ApatMapper {

	ApatMapper INSTANCE = Mappers.getMapper(ApatMapper.class);

	ApatDTO apatToApatDto(Apat apat);
	
	Apat apatDtoToApat(ApatDTO apatDto);

	List<ApatDTO> listApatDto(List<Apat> apats);
}
