/**
 * 
 */
package ioc.cat.camptina.model.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Creació de la entitat per a la taula Àpat
 */
@Entity
@Table(name = "apat")
public class Apat {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nom;
	private String descripcio;
	private int categoria;

	public Apat() {

	}

	public Apat(int id) {
		this.id = id;
	}

	public Apat(String nom, String descripcio, int categoria) {
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

	public int getCategoria() {
		return categoria;
	}

	public void setCategoria(int categoria) {
		this.categoria = categoria;
	}

}
