/**
 * 
 */
package ioc.cat.camptina.model.dto;

/**
 * Creació DTO per a no exposar la Entitat
 */

public class ApatDTO {

	private int id;
	private String nom;
	private String descripcio;
	private int categoria;

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
