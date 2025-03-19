/**
 * 
 */
package ioc.cat.camptina.model.Entity;

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
@Table(name = "apat")
public class ApatEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nom;
	private String descripcio;

	@ManyToOne
	@JoinColumn(name = "categoria")
	private CategoriaEntity categoria;

	public ApatEntity() {

	}

	public ApatEntity(int id) {
		this.id = id;
	}

	public ApatEntity(String nom, String descripcio, CategoriaEntity categoria) {
		this.nom = nom;
		this.descripcio = descripcio;
		this.categoria = categoria;
	}

	/*
	 * Setters i Getters
	 */

	public int getId() {
		return id;
	}

	public CategoriaEntity getCategoria() {
		return categoria;
	}

	public void setCategoria(CategoriaEntity categoria) {
		this.categoria = categoria;
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

}
