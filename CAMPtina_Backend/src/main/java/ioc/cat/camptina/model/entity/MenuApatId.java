package ioc.cat.camptina.model.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

/**
 * Classe embeguda per utilitzarla com a id per a la entitat Menu-Apat
 * 
 * @author Palmira
 */
@Embeddable
public class MenuApatId implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name = "ID_MENU")
	private int menuId;

	@Column(name = "ID_APAT")
	private int apatId;

	public MenuApatId() {
	}

	public MenuApatId(int menuId, int apatId) {
		this.menuId = menuId;
		this.apatId = apatId;
	}

	public int getMenuId() {
		return menuId;
	}

	public void setMenuId(int menuId) {
		this.menuId = menuId;
	}

	public int getApatId() {
		return apatId;
	}

	public void setApatId(int apatId) {
		this.apatId = apatId;
	}

}
