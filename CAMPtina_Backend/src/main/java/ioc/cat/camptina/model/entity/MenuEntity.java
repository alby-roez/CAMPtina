/**
 * @author Palmira
 */
package ioc.cat.camptina.model.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

/**
 * Classe entitat que representa un menú dins del sistema. Emmagatzema
 * informació detallada sobre el menú, incloent el id, el nom, el preu i si es
 * troba actiu.
 * 
 * @author Palmira
 */
@Entity
@Table(name = "MENU")
public class MenuEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_MENU")
	private int id;

	@Column(name = "NOM")
	private String nom;

	@Column(name = "PREU")
	private double preu;

	@Column(name = "ACTIU")
	private int actiu;
	
	@OneToMany(mappedBy = "menu")
	private List<MenuApatEntity> menuApatsEntity;
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public double getPreu() {
		return preu;
	}

	public void setPreu(double preu) {
		this.preu = preu;
	}

	public int getActiu() {
		return actiu;
	}

	public void setActiu(int actiu) {
		this.actiu = actiu;
	}

	public List<MenuApatEntity> getMenuApatsEntity() {
		return menuApatsEntity;
	}

	public void setMenuApatsEntity(List<MenuApatEntity> menuApatsEntity) {
		this.menuApatsEntity = menuApatsEntity;
	}
	


}
