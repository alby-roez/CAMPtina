/**
 * 
 */
package ioc.cat.camptina.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ioc.cat.camptina.model.Entity.CategoriaEntity;

/**
 * 
 */
@Repository
public interface CategoriaRepository extends JpaRepository<CategoriaEntity, Integer> {

}
