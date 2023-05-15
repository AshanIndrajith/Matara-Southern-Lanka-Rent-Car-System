package com.example.jwtapplication.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class DamageDTO {

    private int id;
    private Long vehicleId;
    private String description;
    private String damageDate;
    private Byte[] image;
    private Double amount;

    private String fixedStatus;
}
