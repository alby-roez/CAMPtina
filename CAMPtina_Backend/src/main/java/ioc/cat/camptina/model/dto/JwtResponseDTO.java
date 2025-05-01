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

	public JwtResponseDTO(String token, String email, int usuariId, String rolNom) {
		super();
		this.token = token;
		this.type = "Bearer";
		this.username = email;
		this.usuariId = usuariId;
		this.rolNom = rolNom;
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

}
