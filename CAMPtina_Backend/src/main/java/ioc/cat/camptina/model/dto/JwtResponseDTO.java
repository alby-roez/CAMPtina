package ioc.cat.camptina.model.dto;

/**
 * 
 */
public class JwtResponseDTO {

	private String token;
	private String type;
	private String username;
	private int usuariId;
	private String rolNom;
	private String nom;
	private String cognom1;

	public JwtResponseDTO(String token, String email, int usuariId, String rolNom, String nom, String cognom1) {
		super();
		this.token = token;
		this.type = "Bearer";
		this.username = email;
		this.usuariId = usuariId;
		this.rolNom = rolNom;
		this.nom = nom;
		this.cognom1 = cognom1;
	}
	
	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getEmail() {
		return username;
	}

	public void setEmail(String email) {
		this.username = email;
	}

	public int getUsuariId() {
		return usuariId;
	}

	public void setUsuariId(int usuariId) {
		this.usuariId = usuariId;
	}

	public String getRolNom() {
		return rolNom;
	}

	public void setRolNom(String rolNom) {
		this.rolNom = rolNom;
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

}
