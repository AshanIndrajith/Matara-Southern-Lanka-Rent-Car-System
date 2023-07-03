package com.example.jwtapplication.Controller;

import com.example.jwtapplication.Entity.Booking;
import com.example.jwtapplication.Entity.Specification;
import com.example.jwtapplication.Service.SpecificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@RequestMapping("/specification")
public class SpecificationController {

    @Autowired
    private SpecificationService specificationService;

    @PostMapping("/save")
    public ResponseEntity<String> saveSpecification(@RequestBody Specification specification) {
        try {
            // Save customer to the database
            specificationService.saveSpecification(specification);

            return ResponseEntity.ok("Specification saved successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error occurred while saving Specification: " + e.getMessage());
        }
    }
}