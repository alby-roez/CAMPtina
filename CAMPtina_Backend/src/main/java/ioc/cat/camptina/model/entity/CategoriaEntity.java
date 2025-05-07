/**
 * 
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
 * Classe de la entitat per a la taula Categoria
 * @author Palmira
 */
@Entity
@Table(name = "CATEGORIA")
public class CategoriaEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_CATEGORIA", nullable = false)
	private int id;

	@Column(name = "NOM", nullable = false)
	private String nom;

	@OneToMany(mappedBy = "categoria")
	private List<ApatEntity> apats;

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

	public List<ApatEntity> getApats() {
		return apats;
	}

	public void setApats(List<ApatEntity> apats) {
		this.apats = apats;
	}

}
