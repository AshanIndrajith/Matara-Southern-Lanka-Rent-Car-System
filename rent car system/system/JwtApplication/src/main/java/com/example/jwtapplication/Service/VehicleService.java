package com.example.jwtapplication.Service;


import com.example.jwtapplication.Entity.Vehicle;
import com.example.jwtapplication.Repository.VehicleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class VehicleService implements VehicleServiceImpl{


    @Autowired
    private VehicleRepo vehicleRepo;

    public VehicleService(VehicleRepo vehicleRepo) {
        super();
        this.vehicleRepo = vehicleRepo;
    }

    @Override
    public Iterable<Vehicle> getAllVehicle() {
        return (List<Vehicle>) vehicleRepo.findAll();
    }

    @Override
    public Vehicle saveVehicle(Vehicle vehicle) {
        return null;
    }

    @Override
    public Vehicle getVehicleById(Long id) {
        return null;
    }

    @Override
    public Vehicle updateVehicle(Vehicle vehicle) {
        return null;
    }

    @Override
    public void deleteVehicleById(Long id) {

    }
}
