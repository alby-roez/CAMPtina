package ioc.cat.camptina.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ioc.cat.camptina.model.entity.MenuEntity;

/**
 * @author Palmira
 */
public interface MenuRepository extends JpaRepository<MenuEntity, Integer> {

}
