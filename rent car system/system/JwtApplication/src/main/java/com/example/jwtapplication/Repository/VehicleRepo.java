package com.example.jwtapplication.Repository;

import com.example.jwtapplication.Entity.Booking;
import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Entity.Vehicle;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;


@Repository
public interface VehicleRepo extends CrudRepository<Vehicle, Integer> {


    @Query(value = "SELECT COUNT(*) FROM vehicle ", nativeQuery = true)
    int getTotalVehicle();


    @Query(value = "SELECT * FROM vehicle WHERE id NOT IN (SELECT vehicle_id FROM booking WHERE :date BETWEEN from_date AND to_date);", nativeQuery = true)
    List<Vehicle> findAvailableVehiclesByDate(@Param("date") String date);


    @Query(value = "SELECT * FROM vehicle WHERE id NOT IN (SELECT vehicle_id FROM booking WHERE :fromDate BETWEEN from_date AND to_date OR :toDate BETWEEN from_date AND to_date);", nativeQuery = true)
    List<Vehicle> findAvailableVehiclesByDate(String fromDate, String toDate);





    @Query(value = "SELECT * FROM vehicle WHERE registered_number = :reg", nativeQuery = true)
    List<Vehicle> findIdByRegistrationNumber(@Param("reg") String reg);


}
