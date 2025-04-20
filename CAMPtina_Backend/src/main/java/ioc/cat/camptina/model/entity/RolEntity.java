package ioc.cat.camptina.model.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "ROL")
public class RolEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_ROL", nullable = false)
	private int id;

	@Column(name = "NOM", nullable = false)
	private String nom;

	@OneToMany(mappedBy = "rol")
	private List<UsuariEntity> usuaris;

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

	public List<UsuariEntity> getUsuaris() {
		return usuaris;
	}

	public void setUsuaris(List<UsuariEntity> usuaris) {
		this.usuaris = usuaris;
	}
	
}