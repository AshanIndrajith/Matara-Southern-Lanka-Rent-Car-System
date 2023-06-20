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

//    @PutMapping("/update/{id}")
//    public ResponseEntity<?> updateBooking(@PathVariable("id") Long id, @RequestBody Booking updateBooking) {
//        Booking existingBooking = bookingService.getBookingById(id);
//        if (existingBooking != null) {
//            existingBooking.setId(updateBooking.getId());
//            existingBooking.setCus_nic(updateBooking.getCus_nic());
//            existingBooking.setCus_email(updateBooking.getCus_email());
//            existingBooking.setCus_phone(updateBooking.getCus_phone());
//            existingBooking.setVehicle_id(updateBooking.getVehicle_id());
//            existingBooking.setFrom_date(updateBooking.getFrom_date());
//            existingBooking.setTo_date(updateBooking.getTo_date());
//            existingBooking.setStatus(String.valueOf(0));
//
//
//            Booking updatedBookingObj = bookingService.updateBooking(existingBooking);
//            return ResponseEntity.ok(updatedBookingObj);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }




    @GetMapping("/byStatus")
    public ResponseEntity<Booking> findByStatus() {
        Booking booking = bookingService.findByStatus();
        if (booking != null) {
            return ResponseEntity.ok(booking);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateStatusBooking(@PathVariable("id") Long id, @RequestBody Booking updateReqBooking) {
        Booking existingReqBooking = bookingService.getBookingById(id);
        if (existingReqBooking != null) {
            existingReqBooking.setStatus("1");
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


}
