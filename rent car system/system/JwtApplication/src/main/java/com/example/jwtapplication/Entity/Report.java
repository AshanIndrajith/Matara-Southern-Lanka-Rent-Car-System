package com.example.jwtapplication.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "report")
public class Report {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long report_id;

    private String report_name;
    private String path;
    private Date date;
}