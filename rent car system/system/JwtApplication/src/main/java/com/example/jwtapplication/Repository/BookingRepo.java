package com.example.jwtapplication.Repository;

import com.example.jwtapplication.Entity.Booking;
import com.example.jwtapplication.Entity.Customer;
import org.springframework.data.repository.CrudRepository;

public interface BookingRepo extends CrudRepository<Booking, Long> {

}
