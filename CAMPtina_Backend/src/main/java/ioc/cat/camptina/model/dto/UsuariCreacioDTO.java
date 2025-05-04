package ioc.cat.camptina.model.dto;

/**
 * Classe DTO per a UsuariEntity en el que es recullen tots els camps de la
 * entitat que son necessaris per la creació o edició d'un usuari, sense exposar
 * la entitat directament
 * 
 * @author Palmira
 */
public class UsuariCreacioDTO {

	private int id;
	private String nom;
	private String cognom1;
	private String cognom2;
	private int rolId;
	private String email;
	private String contrasenya;

	public String getContrasenya() {
		return contrasenya;
	}

	public void setContrasenya(String contrasenya) {
		this.contrasenya = contrasenya;
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

	public String getCognom1() {
		return cognom1;
	}

	public void setCognom1(String cognom1) {
		this.cognom1 = cognom1;
	}

	public String getCognom2() {
		return cognom2;
	}

	public void setCognom2(String cognom2) {
		this.cognom2 = cognom2;
	}

	public int getRolId() {
		return rolId;
	}

	public void setRolId(int rolId) {
		this.rolId = rolId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
