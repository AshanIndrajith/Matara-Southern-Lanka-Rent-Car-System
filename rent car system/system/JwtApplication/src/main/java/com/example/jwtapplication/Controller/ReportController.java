package com.example.jwtapplication.Controller;

import com.example.jwtapplication.Entity.Report;
import com.example.jwtapplication.Repository.ReportRepo;
import com.example.jwtapplication.Service.ReportService;
import jakarta.annotation.Resource;
import net.sf.jasperreports.engine.JRException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;


@RestController
@RequestMapping("/api/reports")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @Autowired
    private ReportRepo reportRepo;

    @GetMapping("/incomeReport")
    public String generateIncomeReport() throws JRException, IOException {
        return reportService.exportIncomeReport();
    }

    @GetMapping("/DamageReport")
    public String generateDamageReport() throws JRException, FileNotFoundException {
        return reportService.exportDamageReport();
    }



    @GetMapping("/all")
    public List<Report>getAllDocs(Report report){
        return reportRepo.findAll();
    }


    @GetMapping("/{fileId}/download")
    public ResponseEntity<Resource> downloadFile(@PathVariable Long fileId) throws FileNotFoundException {
        // Retrieve the file record from the database
        Optional<Report> optionalFile = reportRepo.findById(fileId);
        if (optionalFile.isPresent()) {
            Report report = optionalFile.get();
            // Create a Resource object from the report's local path
            Resource resource = (Resource) new FileSystemResource(report.getPath());
            if (((FileSystemResource) resource).exists()) {
                // Return the report as a downloadable attachment
                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + report.getReport_name() + "\"")
                        .body(resource);
            } else {
                throw new FileNotFoundException("File not found: " + report.getPath());
            }
        } else {
            throw new NoSuchElementException("File not found with ID: " + fileId);
        }
    }




}