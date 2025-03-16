/**
 * 
 */
package ioc.cat.camptina.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ioc.cat.camptina.model.Entity.ApatEntity;
import ioc.cat.camptina.model.dao.IApatDAO;

/**
 * 
 */
@Service
public class ApatServiceImpl implements IApatService{

	@Autowired
	IApatDAO iApatDao;

	@Override
	public List<ApatEntity> findApatsByCategoria(int categoria) {
		return iApatDao.findApatsByCategoria(categoria);
	}
	
	
}
