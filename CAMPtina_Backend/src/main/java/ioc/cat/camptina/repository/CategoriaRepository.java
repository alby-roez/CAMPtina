/**
 * 
 */
package ioc.cat.camptina.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ioc.cat.camptina.model.entity.CategoriaEntity;

/**
 * Interficie que utilitza JpaRepository per fer consulta a BBDD
 * 
 * @author Palmira
 */
@Repository
public interface CategoriaRepository extends JpaRepository<CategoriaEntity, Integer> {

}
