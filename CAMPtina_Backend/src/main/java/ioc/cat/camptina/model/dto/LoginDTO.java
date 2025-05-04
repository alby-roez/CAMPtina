package ioc.cat.camptina.model.dto;

/**
 * Classe DTO per a recollir les dades que necessitem per gestionar el Login
 * correctament
 * 
 * @author Palmira
 */
public class LoginDTO {

	private String email;

	private String contrasenya;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContrasenya() {
		return contrasenya;
	}

	public void setContrasenya(String contrasenya) {
		this.contrasenya = contrasenya;
	}

}
