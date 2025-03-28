/**
 * 
 */
package ioc.cat.camptina.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

/**
 * Creació de la entitat per a la taula Àpat
 */
@Entity
@Table(name = "APAT")
public class ApatEntity {
 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID_APAT")
	private int id;
	
	@Column(name="NOM", nullable = false)
	private String nom;
	
	@Column(name="DESCRIPCIO", nullable = true)
	private String descripcio;

	@ManyToOne
	@JoinColumn(name = "ID_CATEGORIA")
	private CategoriaEntity categoria;

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

	public String getDescripcio() {
		return descripcio;
	}

	public void setDescripcio(String descripcio) {
		this.descripcio = descripcio;
	}

	public CategoriaEntity getCategoria() {
		return categoria;
	}

	public void setCategoria(CategoriaEntity categoria) {
		this.categoria = categoria;
	}

}
