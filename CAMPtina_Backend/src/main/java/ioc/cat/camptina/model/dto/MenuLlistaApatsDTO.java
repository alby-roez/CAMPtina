package ioc.cat.camptina.model.dto;

import java.util.List;
import java.util.Map;

/**
 * Classe DTO per a mostrar un menú complet
 * 
 * @author Palmira
 */
public class MenuLlistaApatsDTO {

	private int id;
	private String nom;
	private Map<String, List<ApatDTO>> apatsPerCategoria;
	private double preu;

	public double getPreu() {
		return preu;
	}

	public void setPreu(double preu) {
		this.preu = preu;
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

	public Map<String, List<ApatDTO>> getApatsPerCategoria() {
		return apatsPerCategoria;
	}

	public void setApatsPerCategoria(Map<String, List<ApatDTO>> apatsPerCategoria) {
		this.apatsPerCategoria = apatsPerCategoria;
	}

}
