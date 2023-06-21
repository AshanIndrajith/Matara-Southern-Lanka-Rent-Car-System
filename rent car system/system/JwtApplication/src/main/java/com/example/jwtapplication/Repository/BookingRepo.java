package com.example.jwtapplication.Repository;

import com.example.jwtapplication.Entity.Booking;
import com.example.jwtapplication.Entity.Customer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BookingRepo extends CrudRepository<Booking, Long> {


    @Query(value = "SELECT * FROM booking WHERE status = '0' LIMIT 10", nativeQuery = true)
    List<Booking> findAllByStatus();

}
