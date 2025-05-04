package ioc.cat.camptina.model.dto;

/**
 * Classe DTO per a MenuApatEntity per a no exposar la Entitat 
 * @author Palmira
 */
public class MenuApatDTO {

	private int menuId;

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
