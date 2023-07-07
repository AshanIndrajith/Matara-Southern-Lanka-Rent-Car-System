package com.example.jwtapplication.Repository;

import com.example.jwtapplication.Entity.Vehicle;
import com.example.jwtapplication.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepo extends JpaRepository<User,Integer> {
    Optional<User> findByEmail(String email);


    @Query(value = "SELECT * FROM users WHERE email = :email", nativeQuery = true)
    List<User> findByUserEmail(@Param("email") String email);


}
