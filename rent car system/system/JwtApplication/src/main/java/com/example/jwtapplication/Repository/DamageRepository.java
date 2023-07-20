package com.example.jwtapplication.Repository;

import com.example.jwtapplication.Entity.Damage;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface DamageRepository extends CrudRepository<Damage, Integer> {


    @Query(value = "SELECT * FROM Damage WHERE date BETWEEN :startDate AND :endDate", nativeQuery = true)
    List<Damage> findAllByDateRange(@Param("startDate") String startDate, @Param("endDate") String endDate);


}
