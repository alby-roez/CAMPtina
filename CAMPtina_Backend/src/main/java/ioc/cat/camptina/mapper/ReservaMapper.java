package ioc.cat.camptina.mapper;

import java.util.List;

import ioc.cat.camptina.model.dto.ReservaDTO;
import ioc.cat.camptina.model.entity.ReservaEntity;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ReservaMapper {

    ReservaMapper INSTANCE = Mappers.getMapper(ReservaMapper.class);

    List<ReservaDTO> listReservaEntityToDto(List<ReservaEntity> reserva);

    ReservaDTO reservaEntityToReservaDto(ReservaEntity reservaEntity);

    ReservaEntity reservaDtoToReservaEntity(ReservaDTO reservaDto);

}
