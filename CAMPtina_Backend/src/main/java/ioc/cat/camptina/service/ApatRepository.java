/**
 * 
 */
package ioc.cat.camptina.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ioc.cat.camptina.model.Entity.ApatEntity;

/**
 * 
 */
@Repository
public interface ApatRepository extends JpaRepository<ApatEntity, Integer>{
	
	List<ApatEntity> findByCategoria(int categoria);
	Optional <ApatEntity> findById(int id);
	
}
