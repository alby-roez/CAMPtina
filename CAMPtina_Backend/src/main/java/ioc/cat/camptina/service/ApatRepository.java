/**
 * 
 */
package ioc.cat.camptina.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ioc.cat.camptina.model.Entity.Apat;

/**
 * 
 */
@Repository
public interface ApatRepository extends JpaRepository<Apat, Integer>{
	
	List<Apat> findByCategoria(int categoria);
	List<Apat> findAll();
	Optional <Apat> findById(int id);
	
}
