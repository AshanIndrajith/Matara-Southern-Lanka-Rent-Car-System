package com.example.jwtapplication.Repository;

import com.example.jwtapplication.Entity.Customer;
import com.example.jwtapplication.Entity.Damage;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepo extends CrudRepository<Customer, Integer> {

    @Query(value = "SELECT * FROM customer WHERE name = 'ashan'", nativeQuery = true)
    Customer findCustomerByName();

}


