package ioc.cat.camptina.model.dto;

import java.time.LocalDate;

public class ReservaDTO {

    private int idReserva;
    private int idUsuari;
    private int idTorn;
    private int idMenu;
    private int idPrimer;
    private int idSegon;
    private int idPostre;
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