package ioc.cat.camptina.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ioc.cat.camptina.model.entity.RolEntity;

@Repository
public interface RolRepository extends JpaRepository<RolEntity, Integer>{

}
