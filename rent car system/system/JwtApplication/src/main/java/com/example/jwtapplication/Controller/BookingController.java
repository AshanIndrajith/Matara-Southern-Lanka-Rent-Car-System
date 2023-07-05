package com.example.jwtapplication.Controller;


import com.example.jwtapplication.Entity.Booking;
import com.example.jwtapplication.Entity.Customer;
import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Service.BookingServiceImpl;
import com.example.jwtapplication.Service.DamageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingServiceImpl bookingService;

    @GetMapping("/view")
    @ResponseBody
    public ResponseEntity<List<Booking>> listBooking() {
        Iterable<Booking> bookingList = bookingService.getAllBooking();
        return ResponseEntity.ok((List<Booking>) bookingList);
    }


    @PostMapping("/save")
    public ResponseEntity<String> saveBooking(@RequestBody Booking booking) {
        try {
            // Save customer to the database
            bookingService.saveBooking(booking);



            return ResponseEntity.ok("Booking saved successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error occurred while saving Booking: " + e.getMessage());
        }
    }


    @GetMapping("/get/{id}")
    @ResponseBody
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        Booking booking = bookingService.getBookingById(id);
        if (booking == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(booking);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id) {
        try {
            bookingService.deleteBookingById(id);
            return ResponseEntity.ok("booking information deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error occurred while deleting Booking: " + e.getMessage());
        }
    }

    @PutMapping("/updateBooking/{id}")
    public ResponseEntity<?> updateBooking(@PathVariable("id") Long id, @RequestBody Booking updateBooking) {
        Booking existingBooking = bookingService.getBookingById(id);
        if (existingBooking != null) {

            existingBooking.setCus_name(updateBooking.getCus_name());
            existingBooking.setCus_nic(updateBooking.getCus_nic());
            existingBooking.setCus_email(updateBooking.getCus_email());
            existingBooking.setCus_phone(updateBooking.getCus_phone());
            existingBooking.setVehicle_id(updateBooking.getVehicle_id());

            existingBooking.setStatus(String.valueOf(1));

            Booking updatedBookingObj = bookingService.updateBooking(existingBooking);
            return ResponseEntity.ok(updatedBookingObj);
        } else {
            return ResponseEntity.notFound().build();
        }
    }





    @GetMapping("/byStatus")
    public ResponseEntity<List<Booking>> findByStatus() {
        List<Booking> bookings = bookingService.findAllByStatus();
        if (!bookings.isEmpty()) {
            return ResponseEntity.ok(bookings);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/byService")
    public ResponseEntity<List<Booking>> ServiceOutVehicle() {
        List<Booking> service = bookingService.ServiceOutVehicle();
        if (!service.isEmpty()) {
            return ResponseEntity.ok(service);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @PutMapping("/updateReturn/{id}")
    public ResponseEntity<?> updateReturnBooking(@PathVariable("id") Long id, @RequestBody Booking updateReturn) {
        Booking eBooking = bookingService.getBookingById(id);
        if (eBooking != null) {
            eBooking.setService_out("0");
            Booking updatedReturnBookingObj = bookingService.updateReturnBooking(eBooking);
            return ResponseEntity.ok(updatedReturnBookingObj);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateStatusBooking(@PathVariable("id") Long id, @RequestBody Booking updateReqBooking) {
        Booking existingReqBooking = bookingService.getBookingById(id);
        if (existingReqBooking != null) {
            existingReqBooking.setStatus("1");
            existingReqBooking.setService_out("1");
            Booking updatedReqBookingObj = bookingService.updateBooking(existingReqBooking);
            return ResponseEntity.ok(updatedReqBookingObj);
        } else {
            return ResponseEntity.notFound().build();
        }
    }



    @PutMapping("/rejected/{id}")
    public ResponseEntity<?> rejectedStatusBooking(@PathVariable("id") Long id, @RequestBody Booking rejectedReqBooking) {
        Booking rejected = bookingService.getBookingById(id);
        if (rejected != null) {
            rejected.setStatus("2");
            Booking updatedReqBookingObj = bookingService.updateBooking(rejected);
            return ResponseEntity.ok(updatedReqBookingObj);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/ptotal")
    public ResponseEntity<Integer> getTotalBookings() {
        int total = bookingService.getTotalBookings();
        return ResponseEntity.ok(total);
    }

    @GetMapping("/total")
    public ResponseEntity<Integer> getAllBookings() {
        int All = bookingService.getAllBookings();
        return ResponseEntity.ok(All);
    }






}
