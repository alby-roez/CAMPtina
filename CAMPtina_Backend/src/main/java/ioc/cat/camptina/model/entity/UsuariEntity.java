package ioc.cat.camptina.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

/**
 * Classe de la entitat per a la taula Usuari
 */

@Entity
@Table (name = "USUARI")
public class UsuariEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_USUARI", nullable = false)
	private int id;
	
	@Column(name = "NOM", nullable = false)
	private String nom;
	
	@Column(name = "COGNOM1", nullable = true)
	private String cognom1;
	
	@Column(name = "COGNOM2", nullable = true)
	private String cognom2;
	
	@ManyToOne
	@JoinColumn(name = "ID_ROL")
	private RolEntity rol;
	
	@Column(name = "EMAIL", nullable = true)
	private String email;
	
	@Column(name = "CONTRASENYA", nullable = false)
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public RolEntity getRol() {
		return rol;
	}
	
	public void setRol(RolEntity rol) {
		this.rol = rol;
	}
	
	
	
}
