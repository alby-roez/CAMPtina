package ioc.cat.camptina.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ioc.cat.camptina.model.entity.ReservaEntity;

@Repository
public interface ReservaRepository extends JpaRepository<ReservaEntity, Integer> {

    List<ReservaEntity> findReservaByUsuariId(int idUsuari);
    Optional<ReservaEntity> findById(int id);
    List<ReservaEntity> findReservesByData(LocalDate data);
    Optional<ReservaEntity> findFirstByUsuariId(int idUsuari);
    Optional<ReservaEntity> findLastByUsuariId(int idUsuari);

}