/**
 * 
 */
package ioc.cat.camptina.mapper;

import org.mapstruct.Mapper;

import ioc.cat.camptina.model.dto.CategoriaDTO;
import ioc.cat.camptina.model.entity.CategoriaEntity;

/**
 * 
 */	
@Mapper(componentModel = "spring")
public interface CategoriaMapper {

	CategoriaDTO categoriaEntityToCategoriaDTO(CategoriaEntity categoria);

	CategoriaEntity categoriaDTOToCategoriaEntity(CategoriaDTO categoria);
}
