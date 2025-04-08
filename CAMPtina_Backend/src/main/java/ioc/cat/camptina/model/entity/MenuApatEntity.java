package ioc.cat.camptina.model.entity;

import java.util.Objects;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;

/**
 * @author Palmira
 */
@Entity
@Table(name = "MENU_APATS")
public class MenuApatEntity {

	@EmbeddedId
	private MenuApatId id;

	@ManyToOne
	@MapsId("menuId")
	@JoinColumn(name = "ID_MENU")
	private MenuEntity menu;

	@ManyToOne
	@MapsId("apatId")
	@JoinColumn(name = "ID_APAT")
	private ApatEntity apat;

	public MenuApatId getId() {
		return id;
	}

	public void setId(MenuApatId id) {
		this.id = id;
	}

	public MenuEntity getMenu() {
		return menu;
	}

	public void setMenu(MenuEntity menu) {
		this.menu = menu;
	}

	public ApatEntity getApat() {
		return apat;
	}

	public void setApat(ApatEntity apat) {
		this.apat = apat;
	}

	@Override
	public String toString() {
		return "MenuApat [id=" + id + ", menu=" + menu + ", apat=" + apat + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(apat, id, menu);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		MenuApatEntity other = (MenuApatEntity) obj;
		return Objects.equals(apat, other.apat) && Objects.equals(id, other.id) && Objects.equals(menu, other.menu);
	}
	
	

}
