/**
 * 
 */
package ioc.cat.camptina.service;

import java.util.List;

import ioc.cat.camptina.model.Entity.ApatEntity;

/**
 * 
 */
public interface IApatService {
	
	public List<ApatEntity> findApatsByCategoria(int categoria);

}
