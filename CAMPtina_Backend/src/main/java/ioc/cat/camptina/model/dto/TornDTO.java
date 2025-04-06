package ioc.cat.camptina.model.dto;

public class TornDTO {
    private int id;
    private String nom;
    private String horaInici;
    private String horaFi;
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

    public String getHoraInici() {
        return horaInici;
    }

    public void setHoraInici(String horaInici) {
        this.horaInici = horaInici;
    }

    public String getHoraFi() {
        return horaFi;
    }

    public void setHoraFi(String horaFi) {
        this.horaFi = horaFi;
    }

    public int getAforament() {
        return aforament;
    }

    public void setAforament(int aforament) {
        this.aforament = aforament;
    }
}
