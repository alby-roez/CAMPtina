/**
 * 
 */
package ioc.cat.camptina.model.dto;

/**
 * Classe DTO per a ApatEntity per a no exposar la Entitat 
 * @author Palmira
 */

public class ApatDTO {

	private int id;
	private String nom;
	private String descripcio;
	private int categoriaId;

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

	public int getCategoriaId() {
		return categoriaId;
	}

	public void setCategoriaId(int categoriaId) {
		this.categoriaId = categoriaId;
	}

}
