/**
 * 
 */
package ioc.cat.camptina.model.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import ioc.cat.camptina.model.Entity.ApatEntity;

/**
 * 
 */
public interface IApatDAO extends JpaRepository<ApatEntity, Integer>{

	@Query(value= "SELECT * FROM apat WHERE categoria = ?", nativeQuery = true)
	List<ApatEntity> findApatsByCategoria(int categoria);
	
	

}
