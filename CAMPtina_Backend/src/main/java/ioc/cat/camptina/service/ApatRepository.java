/**
 * 
 */
package ioc.cat.camptina.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import ioc.cat.camptina.model.Entity.ApatEntity;
import ioc.cat.camptina.model.Entity.CategoriaEntity;

/**
 * 
 */
@Repository
public interface ApatRepository extends JpaRepository<ApatEntity, Integer>{
	
	@Query(value= "SELECT * FROM apat WHERE categoria_id = ?", nativeQuery = true)
	List<ApatEntity> findByCategoria(int categoriaId);
	Optional <ApatEntity> findById(int id);
	
}
