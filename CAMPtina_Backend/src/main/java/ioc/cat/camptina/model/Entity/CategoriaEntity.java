/**
 * 
 */
package ioc.cat.camptina.model.Entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

/**
 * 
 */
@Entity
@Table(name = "categoria")
public class CategoriaEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String nom;

	@OneToMany()
	@JoinColumn(name = "apat")
	private List<ApatEntity> apats;

	public CategoriaEntity() {
	};

	public CategoriaEntity(int id) {
		this.id = id;
	}

	public CategoriaEntity(String nom) {
		this.nom = nom;
	}


	public List<ApatEntity> getApats() {
		return apats;
	}

	public void setApats(List<ApatEntity> apats) {
		this.apats = apats;
	}

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

}
