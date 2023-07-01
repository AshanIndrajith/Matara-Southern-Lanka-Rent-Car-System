package com.example.jwtapplication.Repository;

import com.example.jwtapplication.Entity.Booking;
import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Entity.Vehicle;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface VehicleRepo extends CrudRepository<Vehicle, Integer> {


    @Query(value = "SELECT COUNT(*) FROM vehicle ", nativeQuery = true)
    int getTotalVehicle();
}
