package com.example.jwtapplication.Service;

import com.example.jwtapplication.Entity.Booking;
import com.example.jwtapplication.Entity.Customer;
import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Repository.BookingRepo;
import com.example.jwtapplication.Repository.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class BookingService implements BookingServiceImpl{


    @Autowired
    private BookingRepo bookingRepo;

    public BookingService(BookingRepo bookingRepo) {
        super();
        this.bookingRepo = bookingRepo;
    }

    @Override
    public Iterable<Booking> getAllBooking() {
        return (List<Booking>) bookingRepo.findAll();
    }

    @Override
    public Booking saveBooking(Booking booking) {
        return bookingRepo.save(booking);
    }

    @Override
    public Booking getBookingById(Long id) {
        Optional<Booking> bookingOptional = bookingRepo.findById(id);
        return bookingOptional.orElse(null);
    }

    @Override
    public Booking updateBooking(Booking booking) {
        return bookingRepo.save(booking);
    }

    @Override
    public void deleteBookingById(Long id) {
        bookingRepo.deleteById(id);

    }

    @Override
    public Booking updateReqBooking(Booking booking) {
        return bookingRepo.save(booking);
    }

    @Override
    public Booking rejectedReqBooking(Booking booking) {
        return bookingRepo.save(booking);
    }

    @Override
    public  Booking findByStatus() {
        return bookingRepo.findByStatus();
    }
}
