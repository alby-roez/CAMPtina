package ioc.cat.camptina.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;


import ioc.cat.camptina.model.dto.UsuariDTO;
import ioc.cat.camptina.model.entity.UsuariEntity;


@Mapper(componentModel = "Spring")
public interface UsuariMapper {
	
	ApatMapper INSTANCE = Mappers.getMapper(ApatMapper.class);
	
	@Mapping(source="rol.id", target="rolId")
	UsuariDTO usuariEntityToUsuariDto(UsuariEntity usuariEntity);
	
	@Mapping(source="rolId", target="rol.id")
	UsuariEntity usuariDtoToUsuariEntity(UsuariDTO usuariDto);

	List<UsuariDTO> listUsuariEntityToDto(List<UsuariEntity> usuaris);
	
	List<UsuariEntity> listusuariDtoToEntity(List<UsuariDTO> usuaris);
}
