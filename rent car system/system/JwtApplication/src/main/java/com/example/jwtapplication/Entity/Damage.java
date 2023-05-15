package com.example.jwtapplication.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="damage")
public class Damage {


    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "vehicle_id")
    private Long vehicleId;

    @Column(name = "description")
    private String description;

    @Column(name = "damage_date")
    private String damageDate;

    @Column(name = "image")
    private Byte[] image;

    @Column(name = "amount")
    private Double amount;

    @Column(name = "fixed_status")
    private String fixedStatus;


}
