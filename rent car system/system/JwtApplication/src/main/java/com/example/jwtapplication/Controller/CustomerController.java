package com.example.jwtapplication.Controller;

import com.example.jwtapplication.Entity.Customer;
import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Service.CustomerServiceImpl;
import com.example.jwtapplication.Service.DamageServiceImpl;
import com.example.jwtapplication.Util.FileUploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


@Controller
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController {


    @Autowired
    private CustomerServiceImpl customerService;

    @PostMapping("/save")
    public ResponseEntity<String> saveCustomer(@RequestBody Customer customer) {
        try {
            // Save customer to the database
            customerService.saveCustomer(customer);


            return ResponseEntity.ok("Customer saved successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error occurred while saving customer: " + e.getMessage());
        }
    }



    @GetMapping("/view")
    @ResponseBody
    public ResponseEntity<List<Customer>> listCustomer() {
        Iterable<Customer> customerList = customerService.getAllCustomer();
        return ResponseEntity.ok((List<Customer>) customerList);
    }


    @GetMapping("/get/{id}")
    @ResponseBody
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
        Customer customer = customerService.getCustomerById(id);
        if (customer == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(customer);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable Long id) {
        try {
           customerService.deleteCustomerById(id);
            return ResponseEntity.ok("customer deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error occurred while deleting customer: " + e.getMessage());
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateCustomer(@PathVariable("id") Long id, @RequestBody Customer updateCustomer) {
        Customer existingCustomer = customerService.getCustomerById(id);
        if (existingCustomer != null) {
            existingCustomer.setName(updateCustomer.getName());
            existingCustomer.setNic(updateCustomer.getNic());
            existingCustomer.setEmail(updateCustomer.getEmail());
            existingCustomer.setPhone(updateCustomer.getPhone());
            existingCustomer.setAddress(updateCustomer.getAddress());

            Customer updatedCustomerObj = customerService.updateCustomer(existingCustomer);
            return ResponseEntity.ok(updatedCustomerObj);
        } else {
            return ResponseEntity.notFound().build();
        }
    }








}
