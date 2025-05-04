package ioc.cat.camptina.model.entity;

import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Classe de la entitat per a la taula Torn
 */
@Entity
@Table(name = "TORN")
public class TornEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_TORN", nullable = false)
    private int id;

    @Column(name="NOM", nullable = false)
    private String nom;

    @Column(name="HORA_INICI")
    private LocalTime horaInici;

    @Column(name="HORA_FI")
    private LocalTime horaFi;

    @Column(name="AFORAMENT_MAXIM")
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
