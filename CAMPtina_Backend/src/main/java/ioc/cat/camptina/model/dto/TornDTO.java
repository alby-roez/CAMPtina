package ioc.cat.camptina.model.dto;

import java.time.LocalTime;

/**
 * Classe DTO per a TornEntity per a no exposar la Entitat 
 */
public class TornDTO {
    private int id;
    private String nom;
    private LocalTime  horaInici;
    private LocalTime  horaFi;
    private int aforament;

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

    public LocalTime  getHoraInici() {
        return horaInici;
    }

    public void setHoraInici(LocalTime  horaInici) {
        this.horaInici = horaInici;
    }

    public LocalTime  getHoraFi() {
        return horaFi;
    }

    public void setHoraFi(LocalTime  horaFi) {
        this.horaFi = horaFi;
    }

    public int getAforament() {
        return aforament;
    }

    public void setAforament(int aforament) {
        this.aforament = aforament;
    }
}
