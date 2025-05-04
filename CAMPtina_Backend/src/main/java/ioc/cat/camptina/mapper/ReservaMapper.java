package ioc.cat.camptina.mapper;

import java.util.List;

import ioc.cat.camptina.model.dto.ReservaDTO;
import ioc.cat.camptina.model.dto.ReservaDetallDTO;
import ioc.cat.camptina.model.entity.ReservaEntity;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ReservaMapper {

	ReservaMapper INSTANCE = Mappers.getMapper(ReservaMapper.class);

	List<ReservaDTO> listReservaEntityToDto(List<ReservaEntity> reserva);

	@Mapping(source = "usuari.id", target = "idUsuari")
	@Mapping(source = "torn.id", target = "idTorn")
	@Mapping(source = "primer.id", target = "idPrimer")
	@Mapping(source = "segon.id", target = "idSegon")
	@Mapping(source = "postre.id", target = "idPostre")
	@Mapping(source = "menu.id", target="idMenu")
	ReservaDTO reservaEntityToReservaDto(ReservaEntity reservaEntity);

	ReservaEntity reservaDtoToReservaEntity(ReservaDTO reservaDto);

	@Mapping(source = "usuari.id", target = "idUsuari")
	@Mapping(source = "usuari.email", target = "emailUsuari")
	@Mapping(source = "torn.id", target = "idTorn")
	@Mapping(source = "torn.nom", target = "nomTorn")
	@Mapping(source = "primer.id", target = "idPrimer")
	@Mapping(source = "primer.nom", target = "nomPrimer")
	@Mapping(source = "segon.id", target = "idSegon")
	@Mapping(source = "segon.nom", target = "nomSegon")
	@Mapping(source = "postre.id", target = "idPostre")
	@Mapping(source = "postre.nom", target = "nomPostre")
	@Mapping(source = "menu.id", target="idMenu")
	@Mapping(source = "menu.preu", target="preuMenu")
	ReservaDetallDTO toDetalladaDTO(ReservaEntity reservaEntity);

}
