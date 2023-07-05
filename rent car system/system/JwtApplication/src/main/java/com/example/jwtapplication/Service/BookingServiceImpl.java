package com.example.jwtapplication.Service;

import com.example.jwtapplication.Entity.Booking;
import com.example.jwtapplication.Entity.Customer;
import com.example.jwtapplication.Entity.Damage;

import java.awt.print.Book;
import java.util.List;

public interface BookingServiceImpl {


    Iterable<Booking> getAllBooking();

    Booking saveBooking(Booking booking);
    //
    Booking getBookingById(Long id);
    //
    Booking updateBooking(Booking booking);
    //
    void deleteBookingById(Long id);

    Booking updateReqBooking(Booking booking);


    Booking rejectedReqBooking(Booking booking);


    //public  Booking findByStatus();


    public List<Booking> findAllByStatus() ;

    public int getTotalBookings();

    public int getAllBookings();

    public List<Booking> ServiceOutVehicle();

    public Booking updateReturnBooking(Booking booking);

}
