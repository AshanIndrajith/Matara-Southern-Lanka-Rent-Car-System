package com.example.jwtapplication;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class RentCarSystem {

    public static void main(String[] args) {
        SpringApplication.run(RentCarSystem.class, args);



    }

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }


}
