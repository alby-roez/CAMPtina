package ioc.cat.camptina.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ioc.cat.camptina.model.entity.TornEntity;

@Repository
public interface TornRepository extends JpaRepository<TornEntity, Integer> {

}
