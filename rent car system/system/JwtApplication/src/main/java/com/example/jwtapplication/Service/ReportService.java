package com.example.jwtapplication.Service;
import com.example.jwtapplication.Entity.Booking;
import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Repository.BookingRepo;
import com.example.jwtapplication.Repository.DamageRepository;
import com.example.jwtapplication.Repository.ReportRepo;
import lombok.RequiredArgsConstructor;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;


@Service
@RequiredArgsConstructor
public class ReportService {

    //System Reports are Automatically Generated Every day at 9.00PM

    private final JdbcTemplate jdbcTemplate;
    private final BookingRepo bookingRepo;
    private final DamageRepository damageRepository;
    private final ReportRepo reportRepo;



    //Local variable to Store current Data.
    LocalDate currentDate = LocalDate.now();
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
    String dateCreated = currentDate.format(formatter);





    @Scheduled(cron = "0 0 00 * * ?")
    public String exportIncomeReport() throws FileNotFoundException, JRException {
        String reportPath = "E:\\RentCarSystem\\Matara-Southern-Lanka-Rent-Car-System\\rent car system\\system\\JwtApplication\\Report";/*Declaring the Report path as a Global variable.
         *This must be a path to DB*/
        List<Booking> users= (List<Booking>) bookingRepo.findAll();//Retrieving all User Data into a List

        //Loading the .jrxml file and Compiling it
        File file= ResourceUtils.getFile("classpath:IncomeReport.jrxml");
        JasperReport jasperReport= JasperCompileManager.compileReport(file.getAbsolutePath());

        //Mapping List Data into the Report
        JRBeanCollectionDataSource source=new JRBeanCollectionDataSource(users);
        Map<String,Object> parameters=new HashMap<>();
        parameters.put("Created by","Matara Rent Car pvt,Ltd");

        // Saving the report file to the database
        String sql = "INSERT INTO report (report_name, path, date) VALUES (?, ?, ?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, "Income");
            ps.setString(2,reportPath);
            ps.setTimestamp(3, new Timestamp(System.currentTimeMillis())); // set the current date and time
            return ps;
        }, keyHolder);


        // Get the current date and time
        LocalDateTime currentTime = LocalDateTime.now();

        // Format the date and time to a desired pattern
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss");
        String formattedDateTime = currentTime.format(formatter);

        // Create the file name using the formatted date and time
        String fileName = "myfile_" + formattedDateTime + ".txt";

        //Printing the Report
        JasperPrint print= JasperFillManager.fillReport(jasperReport,parameters,source);
        JasperExportManager.exportReportToPdfFile(print,reportPath+"\\income"+formattedDateTime+".pdf");


        return "Report generated Successfully at : "+reportPath;
    }

    @Scheduled(cron = "0 0 00 * * ?")
    public String exportDamageReport() throws FileNotFoundException, JRException {
        String reportPath = "E:\\RentCarSystem\\Matara-Southern-Lanka-Rent-Car-System\\rent car system\\system\\JwtApplication\\Report";/*Declaring the Report path as a Global variable.
         *This must be a path to DB*/
        List<Damage> users= (List<Damage>) damageRepository.findAll();//Retrieving all User Data into a List

        //Loading the .jrxml file and Compiling it
        File file= ResourceUtils.getFile("classpath:DamageReport.jrxml");
        JasperReport jasperReport= JasperCompileManager.compileReport(file.getAbsolutePath());

        //Mapping List Data into the Report
        JRBeanCollectionDataSource source=new JRBeanCollectionDataSource(users);
        Map<String,Object> parameters=new HashMap<>();
        parameters.put("Created by","Matara Rent Car pvt,Ltd");


        // Saving the report file to the database
        String sql = "INSERT INTO report (report_name, path, date) VALUES (?, ?, ?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, "damage");
            ps.setString(2,reportPath);
            ps.setTimestamp(3, new Timestamp(System.currentTimeMillis())); // set the current date and time
            return ps;
        }, keyHolder);


        // Get the current date and time
        LocalDateTime currentTime = LocalDateTime.now();

        // Format the date and time to a desired pattern
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss");
        String formattedDateTime = currentTime.format(formatter);


        //Printing the Report
        JasperPrint print= JasperFillManager.fillReport(jasperReport,parameters,source);
        //Save the Report in the Local File System
        JasperExportManager.exportReportToPdfFile(print,reportPath+"\\damage"+formattedDateTime+".pdf");

        return "Report generated Successfully at : "+reportPath;
    }





}