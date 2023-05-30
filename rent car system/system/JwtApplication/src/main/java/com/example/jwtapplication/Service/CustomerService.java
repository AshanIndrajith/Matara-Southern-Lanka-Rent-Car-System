package com.example.jwtapplication.Service;


import com.example.jwtapplication.Entity.Customer;
import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Repository.CustomerRepo;
import com.example.jwtapplication.Repository.DamageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService implements CustomerServiceImpl{


    @Autowired
    private CustomerRepo customerRepo;

    public CustomerService(CustomerRepo customerRepo) {
        this.customerRepo = customerRepo;
    }



    @Override
    public Iterable<Customer> getAllCustomer() {
        return (List<Customer>) customerRepo.findAll();
    }

    @Override
    public Customer saveCustomer(Customer customer) {
        return customerRepo.save(customer);
    }


    @Override
    public Customer getCustomerById(Long id) {
        Optional<Customer> customerOptional = customerRepo.findById(Math.toIntExact(id));
        return customerOptional.orElse(null);
    }

    @Override
    public Customer updateCustomer(Customer customer) {
        return customerRepo.save(customer);
    }


    @Override
    public void deleteCustomerById(Long id) {

        customerRepo.deleteById(Math.toIntExact(id));

    }
}
