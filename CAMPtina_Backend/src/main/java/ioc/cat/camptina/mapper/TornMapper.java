package ioc.cat.camptina.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import ioc.cat.camptina.model.dto.TornDTO;
import ioc.cat.camptina.model.entity.TornEntity;

@Mapper(componentModel = "spring")
public interface TornMapper {

    TornMapper INSTANCE = Mappers.getMapper(TornMapper.class);

    TornDTO tornEntityToTornDto(TornEntity tornEntity);

    TornEntity tornDtoToTornEntity(TornDTO tornDto);

    List<TornDTO> listTornEntityToDto(List<TornEntity> torns);

    List<TornEntity> listTornDtoToEntity(List<TornDTO> torns);
}
