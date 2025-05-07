package ioc.cat.camptina.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ioc.cat.camptina.model.entity.UsuariEntity;

/**
 * Interficie que utilitza JpaRepository per fer consulta a BBDD
 */
@Repository
public interface UsuariRepository extends JpaRepository<UsuariEntity, Integer> {

	Optional<UsuariEntity> findById(int id);

	List<UsuariEntity> findByRolId(int rolId);

	Optional<UsuariEntity> findByEmail(String email);
}
