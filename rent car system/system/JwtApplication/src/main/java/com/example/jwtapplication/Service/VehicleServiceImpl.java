package com.example.jwtapplication.Service;

import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Entity.Vehicle;

import java.util.Date;
import java.util.List;

public interface VehicleServiceImpl {


    Iterable<Vehicle> getAllVehicle();

    Vehicle saveVehicle(Vehicle vehicle);

    Vehicle getVehicleById(Long id);

    Vehicle updateVehicle(Vehicle vehicle);

    void deleteVehicleById(Long id);

    public int getTotalVehicle();

    public List<Vehicle> findAvailableVehicles(String date) ;

    public List<Vehicle>  findIdByRegistrationNumber(String reg);

    public List<Vehicle> findAvailableVehicles(String fromDate, String toDate);





}
