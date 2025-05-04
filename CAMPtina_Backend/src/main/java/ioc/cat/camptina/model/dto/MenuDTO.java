package ioc.cat.camptina.model.dto;

/**
 * Classe DTO per a MenuEntity per a no exposar la Entitat 
 * @author Palmira
 */
public class MenuDTO {

	private int id;
	private String nom;
	private double preu;
	private int actiu;

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

}
