/**
 * 
 */
package ioc.cat.camptina.model.dto;

/**
 * Classe DTO per a CategoriaEntity per a no exposar la Entitat 
 * @author Palmira
 */
public class CategoriaDTO {

	private int id;
	private String nom;

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
