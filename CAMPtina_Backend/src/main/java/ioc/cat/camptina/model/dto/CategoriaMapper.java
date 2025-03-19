/**
 * 
 */
package ioc.cat.camptina.model.dto;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import ioc.cat.camptina.model.Entity.CategoriaEntity;

/**
 * 
 */
@Mapper(componentModel = "spring")
public interface CategoriaMapper {

	CategoriaDTO categoriaEntityToCategoriaDTO(CategoriaEntity categoria);

	CategoriaEntity categoriaDTOToCategoriaEntity(CategoriaDTO categoria);
}
