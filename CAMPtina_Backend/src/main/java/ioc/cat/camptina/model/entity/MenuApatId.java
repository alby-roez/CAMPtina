package ioc.cat.camptina.model.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

/**
 * @author Palmira
 */
@Embeddable
public class MenuApatId implements Serializable {

	@Column(name = "ID_MENU")
	private int menuId;

	@Column(name = "ID_APAT")
	private int apatId;

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
