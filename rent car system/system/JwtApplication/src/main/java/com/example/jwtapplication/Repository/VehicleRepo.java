package com.example.jwtapplication.Repository;

import com.example.jwtapplication.Entity.Booking;
import org.springframework.data.repository.CrudRepository;

public interface VehicleRepo extends CrudRepository<Booking, Long> {
}
