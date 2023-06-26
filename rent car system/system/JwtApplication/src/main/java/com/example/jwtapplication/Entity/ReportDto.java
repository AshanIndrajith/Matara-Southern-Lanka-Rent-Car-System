package com.example.jwtapplication.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ReportDto {

    private Long report_id;
    private String report_name;
    private String path;
    private Timestamp date;
}