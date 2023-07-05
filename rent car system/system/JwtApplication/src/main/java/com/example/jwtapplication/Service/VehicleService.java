package com.example.jwtapplication.Service;


import com.example.jwtapplication.Entity.Booking;
import com.example.jwtapplication.Entity.Vehicle;
import com.example.jwtapplication.Repository.BookingRepo;
import com.example.jwtapplication.Repository.VehicleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@Service
public class VehicleService implements VehicleServiceImpl{


    @Autowired
    private VehicleRepo vehicleRepo;

    @Autowired
    private BookingRepo bookingRepo;

    public VehicleService(VehicleRepo vehicleRepo, BookingRepo bookingRepo) {
        super();
        this.vehicleRepo = vehicleRepo;
        this.bookingRepo = bookingRepo;
    }

    @Override
    public Iterable<Vehicle> getAllVehicle() {
        return (List<Vehicle>) vehicleRepo.findAll();
    }

    @Override
    public Vehicle saveVehicle(Vehicle vehicle) {
        return vehicleRepo.save(vehicle);
    }

    @Override
    public Vehicle getVehicleById(Long id) {
        Optional<Vehicle> vehicleOptional = vehicleRepo.findById(Math.toIntExact(id));
        return vehicleOptional.orElse(null);
    }

    @Override
    public Vehicle updateVehicle(Vehicle vehicle) {
        return vehicleRepo.save(vehicle);
    }

    @Override
    public void deleteVehicleById(Long id) {
        vehicleRepo.deleteById(Math.toIntExact(id));
    }

    @Override
    public int getTotalVehicle() {
        return vehicleRepo.getTotalVehicle();
    }


    @Override
    public List<Vehicle> findAvailableVehicles() {
        return vehicleRepo.findAvailableVehiclesByDate();
    }

    @Override
    public List<Vehicle> findIdByRegistrationNumber(String reg) {

        return vehicleRepo.findIdByRegistrationNumber(reg);
    }


}
