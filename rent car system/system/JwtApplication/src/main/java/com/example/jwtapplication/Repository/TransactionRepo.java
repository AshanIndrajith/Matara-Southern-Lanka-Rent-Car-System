package com.example.jwtapplication.Repository;

import com.example.jwtapplication.Entity.Booking;
import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Entity.Transaction;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepo extends CrudRepository<Transaction, Long> {


    @Query(value = "SELECT * FROM transaction WHERE posting_id BETWEEN :startDate AND :endDate", nativeQuery = true)
    List<Transaction> findAllByDateRange(@Param("startDate") String startDate, @Param("endDate") String endDate);


}
