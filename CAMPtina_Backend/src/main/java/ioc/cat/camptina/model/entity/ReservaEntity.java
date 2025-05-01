package ioc.cat.camptina.model.entity;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Table(name = "RESERVA")
public class ReservaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_RESERVA", nullable = false)
    private int idReserva;

    @Column(name = "ID_USUARI", nullable = false)
    private int idUsuari;

    @Column(name = "ID_TORN", nullable = false)
    private int idTorn;

    @Column(name = "ID_MENU", nullable = false)
    private int idMenu;

    @Column(name = "ID_PRIMER", nullable = false)
    private int idPrimer;

    @Column(name = "ID_SEGON", nullable = false)
    private int idSegon;

    @Column(name = "ID_POSTRE", nullable = false)
    private int idPostre;

    @Column(name = "DATA", nullable = false)
    private LocalDate data;

    // Getters and Setters
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

    public int getIdTorn() {
        return idTorn;
    }

    public void setIdTorn(int idTorn) {
        this.idTorn = idTorn;
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

    public int getIdSegon() {
        return idSegon;
    }

    public void setIdSegon(int idSegon) {
        this.idSegon = idSegon;
    }

    public int getIdPostre() {
        return idPostre;
    }

    public void setIdPostre(int idPostre) {
        this.idPostre = idPostre;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }
}