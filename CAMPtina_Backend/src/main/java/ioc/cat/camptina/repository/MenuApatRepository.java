package ioc.cat.camptina.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ioc.cat.camptina.model.entity.MenuApatEntity;
import ioc.cat.camptina.model.entity.MenuApatId;

/**
 * Interficie que utilitza JpaRepository per fer consulta a BBDD
 * 
 * @author Palmira
 */
public interface MenuApatRepository extends JpaRepository<MenuApatEntity, MenuApatId> {

	List<MenuApatEntity> findByMenuId(int menuId);

	List<MenuApatEntity> findByApatId(int apatId);

}
