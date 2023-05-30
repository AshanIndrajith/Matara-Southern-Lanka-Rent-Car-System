package com.example.jwtapplication.Service;

import com.example.jwtapplication.Entity.Booking;
import com.example.jwtapplication.Entity.Damage;

import java.awt.print.Book;

public interface BookingServiceImpl {


    Iterable<Booking> getAllBooking();

    Booking saveBooking(Booking booking);
    //
    Booking getBookingById(Long id);
    //
    Booking updateBooking(Booking booking);
    //
    void deleteBookingById(Long id);
}
