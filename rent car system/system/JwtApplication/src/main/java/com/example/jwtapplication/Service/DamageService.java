package com.example.jwtapplication.Service;

import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Repository.DamageRepository;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;


@Service
public class DamageService  implements  DamageServiceImpl {

    @Autowired
    private DamageRepository damageRepository;


    public DamageService(DamageRepository damageRepository) {
        super();
        this.damageRepository = damageRepository;
    }

    @Override
    public Iterable<Damage> getAllStudents() {

        return (List<Damage>) damageRepository.findAll();
    }

    @Override
    public Damage saveDamage(Damage damage) {
        return damageRepository.save(damage);
    }

    @Override
    public Damage getDamageById(Long id) {
        Optional<Damage> damageOptional = damageRepository.findById(Math.toIntExact(id));
        return damageOptional.orElse(null);
    }

    @Override
    public Damage updateDamage(Damage damage) {
        return damageRepository.save(damage);
    }


    @Override
    public void deleteStudentById(Long id) {
        damageRepository.deleteById(Math.toIntExact(id));

    }

//    @Override
//    public String exportReport(String reportFormat) throws FileNotFoundException, JRException {
//        String folderPath = "C:\\Users\\INSIGHT\\Desktop\\New folder";
//        List<Damage> damages = (List<Damage>) damageRepository.findAll();
//
//        // Load the JRXML file and compile it
//        File file = ResourceUtils.getFile("classpath:Damage.jrxml");
//        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
//
//        // Create a data source from the list of damages
//        JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(damages);
//
//        // Set report parameters
//        Map<String, Object> parameters = new HashMap<>();
//        parameters.put("createdBy", "Java Techie");
//        // Fill the report with data
//        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, dataSource);
//
//        // Generate a unique file name using timestamp
//        String timestamp = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
//        String fileName = "damage_" + timestamp + ".pdf";
//        String outputPath = folderPath + "\\" + fileName;
//
//        // Export the report to the specified format
//        if (reportFormat.equalsIgnoreCase("pdf")) {
//            JasperExportManager.exportReportToPdfFile(jasperPrint, outputPath);
//            return "Report generated successfully. Path: " + outputPath;
//        } else {
//            return "Invalid report format. Please provide 'pdf' as the report format.";
//        }
//
//
//    }


    @Override
    public List<Damage> findDamageDetailsByDateRange(String startDate, String endDate) {
        return damageRepository.findAllByDateRange(startDate, endDate);
    }



    @Override
    public String exportReport(List<Damage> damages) throws FileNotFoundException, JRException {
        String folderPath = "C:\\Users\\INSIGHT\\Desktop\\New folder";

        // Load the JRXML file and compile it
        File file = ResourceUtils.getFile("classpath:Damage.jrxml");
        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());

        // Create a data source from the list of damages
        JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(damages);

        // Set report parameters
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("createdBy", "Java Techie");
        // Fill the report with data
        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, dataSource);

        // Generate a unique file name using timestamp
        String timestamp = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
        String fileName = "damage_" + timestamp + ".pdf";
        String outputPath = folderPath + "\\" + fileName;

        // Export the report to the PDF format
        JasperExportManager.exportReportToPdfFile(jasperPrint, outputPath);

        return "Report generated successfully. Path: " + outputPath;
    }


}


