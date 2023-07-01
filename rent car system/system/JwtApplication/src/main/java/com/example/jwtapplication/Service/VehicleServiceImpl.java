package com.example.jwtapplication.Service;

import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Entity.Vehicle;

public interface VehicleServiceImpl {


    Iterable<Vehicle> getAllVehicle();

    Vehicle saveVehicle(Vehicle vehicle);

    Vehicle getVehicleById(Long id);

    Vehicle updateVehicle(Vehicle vehicle);

    void deleteVehicleById(Long id);

    public int getTotalVehicle();


}
