package com.example.jwtapplication.Service;

import com.example.jwtapplication.Entity.Customer;
import com.example.jwtapplication.Entity.Damage;
import org.springframework.stereotype.Service;


public interface CustomerServiceImpl {

    Iterable<Customer> getAllCustomer();

    Customer saveCustomer(Customer customer);
    //
    Customer getCustomerById(Long id);
    //
    Customer updateCustomer(Customer customer);
    //
    void deleteCustomerById(Long id);


    public Customer findCustomerByName();



}
