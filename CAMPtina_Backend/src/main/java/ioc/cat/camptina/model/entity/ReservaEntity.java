package ioc.cat.camptina.model.entity;

import java.time.LocalDate;

import jakarta.persistence.*;
/**
 * Classe de la entitat per a la taula Reserva
 */
@Entity
@Table(name = "RESERVA")
public class ReservaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_RESERVA", nullable = false)
    private int idReserva;

    @ManyToOne
    @JoinColumn(name = "ID_USUARI", nullable = false)
    private UsuariEntity usuari;

    @ManyToOne
    @JoinColumn(name = "ID_TORN", nullable = false)
    private TornEntity torn;

    @ManyToOne
    @JoinColumn(name = "ID_MENU", nullable = false)
    private MenuEntity menu;

    @ManyToOne
    @JoinColumn(name = "ID_PRIMER", nullable = false)
    private ApatEntity primer;

    @ManyToOne
    @JoinColumn(name = "ID_SEGON", nullable = false)
    private ApatEntity segon;

    @ManyToOne
    @JoinColumn(name = "ID_POSTRE", nullable = false)
    private ApatEntity postre;

    @Column(name = "DATA", nullable = false)
    private LocalDate data;

	public int getIdReserva() {
		return idReserva;
	}

	public void setIdReserva(int idReserva) {
		this.idReserva = idReserva;
	}

	public UsuariEntity getUsuari() {
		return usuari;
	}

	public void setUsuari(UsuariEntity usuari) {
		this.usuari = usuari;
	}

	public TornEntity getTorn() {
		return torn;
	}

	public void setTorn(TornEntity torn) {
		this.torn = torn;
	}

	public MenuEntity getMenu() {
		return menu;
	}

	public void setMenu(MenuEntity menu) {
		this.menu = menu;
	}

	public ApatEntity getPrimer() {
		return primer;
	}

	public void setPrimer(ApatEntity primer) {
		this.primer = primer;
	}

	public ApatEntity getSegon() {
		return segon;
	}

	public void setSegon(ApatEntity segon) {
		this.segon = segon;
	}

	public ApatEntity getPostre() {
		return postre;
	}

	public void setPostre(ApatEntity postre) {
		this.postre = postre;
	}

	public LocalDate getData() {
		return data;
	}

	public void setData(LocalDate data) {
		this.data = data;
	}
    
    
}