package com.example.jwtapplication.Repository;

import com.example.jwtapplication.Entity.Customer;
import com.example.jwtapplication.Entity.Damage;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepo extends CrudRepository<Customer, Integer> {
}
