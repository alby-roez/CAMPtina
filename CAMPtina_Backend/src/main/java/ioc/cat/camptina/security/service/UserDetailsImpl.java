package ioc.cat.camptina.security.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import ioc.cat.camptina.model.entity.UsuariEntity;

/**
 * @author Palmira
 */
public class UserDetailsImpl implements UserDetails {

	/**
	 * 
	 */
	private static final long serialVersionUID = -814676478497664399L;

	private int id;
	private String email;

	@JsonIgnore
	private String contrasenya;

	private Collection<? extends GrantedAuthority> authorities;

	public UserDetailsImpl(int id, String email, String contrasenya,
			Collection<? extends GrantedAuthority> authorities) {
		super();
		this.id = id;
		this.email = email;
		this.contrasenya = contrasenya;
		this.authorities = authorities;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public static UserDetailsImpl build(UsuariEntity usuari) {
		SimpleGrantedAuthority authority = new SimpleGrantedAuthority(usuari.getRol().getNom());
		return new UserDetailsImpl(usuari.getId(), usuari.getEmail(), usuari.getContrasenya(),
				Collections.singleton(authority));

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
		return contrasenya;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return email;
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

}
