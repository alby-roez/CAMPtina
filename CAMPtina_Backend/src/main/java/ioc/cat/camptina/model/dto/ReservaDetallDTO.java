package ioc.cat.camptina.model.dto;

import java.time.LocalDate;

/**
 * @author Palmira DTO creat per a retornar tota la informació amb detall de la
 *         reserva
 */
public class ReservaDetallDTO {
	private int idReserva;
	private int idUsuari;
	private String emailUsuari;
	private int idTorn;
	private String nomTorn;
	private int idMenu;
	private int idPrimer;
	private String nomPrimer;
	private int idSegon;
	private String nomSegon;
	private int idPostre;
	private String nomPostre;
	private LocalDate data;
	private double preuMenu;
	

	public double getPreuMenu() {
		return preuMenu;
	}

	public void setPreuMenu(double preuMenu) {
		this.preuMenu = preuMenu;
	}

	public int getIdReserva() {
		return idReserva;
	}

	public void setIdReserva(int idReserva) {
		this.idReserva = idReserva;
	}

	public int getIdUsuari() {
		return idUsuari;
	}

	public void setIdUsuari(int idUsuari) {
		this.idUsuari = idUsuari;
	}

	public String getEmailUsuari() {
		return emailUsuari;
	}

	public void setEmailUsuari(String emailUsuari) {
		this.emailUsuari = emailUsuari;
	}

	public int getIdTorn() {
		return idTorn;
	}

	public void setIdTorn(int idTorn) {
		this.idTorn = idTorn;
	}

	public String getNomTorn() {
		return nomTorn;
	}

	public void setNomTorn(String nomTorn) {
		this.nomTorn = nomTorn;
	}

	public int getIdMenu() {
		return idMenu;
	}

	public void setIdMenu(int idMenu) {
		this.idMenu = idMenu;
	}

	public int getIdPrimer() {
		return idPrimer;
	}

	public void setIdPrimer(int idPrimer) {
		this.idPrimer = idPrimer;
	}

	public String getNomPrimer() {
		return nomPrimer;
	}

	public void setNomPrimer(String nomPrimer) {
		this.nomPrimer = nomPrimer;
	}

	public int getIdSegon() {
		return idSegon;
	}

	public void setIdSegon(int idSegon) {
		this.idSegon = idSegon;
	}

	public String getNomSegon() {
		return nomSegon;
	}

	public void setNomSegon(String nomSegon) {
		this.nomSegon = nomSegon;
	}

	public int getIdPostre() {
		return idPostre;
	}

	public void setIdPostre(int idPostre) {
		this.idPostre = idPostre;
	}

	public String getNomPostre() {
		return nomPostre;
	}

	public void setNomPostre(String nomPostre) {
		this.nomPostre = nomPostre;
	}

	public LocalDate getData() {
		return data;
	}

	public void setData(LocalDate data) {
		this.data = data;
	}

}
