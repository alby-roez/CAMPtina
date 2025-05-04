package ioc.cat.camptina.security.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import ioc.cat.camptina.model.entity.UsuariEntity;

/**
 * Implementació personalitzada de la interfície UserDetails.
 * 
 * Aquesta classe encapsula un usuari del sistema i les seves dades necessàries
 * per a l'autenticació. Spring Security la utilitza per validar credencials i
 * gestionar permisos.
 * 
 * @author Palmira
 */
public class UserDetailsImpl implements UserDetails {

	/**
	 * 
	 */
	private static final long serialVersionUID = -814676478497664399L;

	private int id;
	private String username;
	private String nom;
	private String cognom1;

	@JsonIgnore
	private String password;

	private Collection<? extends GrantedAuthority> authorities;

	public UserDetailsImpl(int id, String email, String contrasenya, Collection<? extends GrantedAuthority> authorities,
			String nom, String cognom1) {
		super();
		this.id = id;
		this.username = email;
		this.password = contrasenya;
		this.authorities = authorities;
		this.nom = nom;
		this.cognom1 = cognom1;

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

	public static UserDetailsImpl build(UsuariEntity usuari) {
		List<GrantedAuthority> authorities = new ArrayList<>();
		authorities.add(new SimpleGrantedAuthority(usuari.getRol().getNom()));
		return new UserDetailsImpl(usuari.getId(), usuari.getEmail(), usuari.getContrasenya(), authorities,
				usuari.getNom(), usuari.getCognom1());
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
		this.authorities = authorities;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;

	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public int hashCode() {
		return Objects.hash(authorities, password, username, id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		UserDetailsImpl other = (UserDetailsImpl) obj;
		return Objects.equals(authorities, other.authorities) && Objects.equals(password, other.password)
				&& Objects.equals(username, other.username) && id == other.id;
	}

}
