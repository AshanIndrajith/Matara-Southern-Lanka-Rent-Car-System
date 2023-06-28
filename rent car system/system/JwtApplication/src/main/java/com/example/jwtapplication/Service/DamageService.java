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

    @Override
    public String exportReport(String reportFormat) throws FileNotFoundException, JRException {
        String path = "C:\\Users\\INSIGHT\\Desktop\\New folder";
        Iterable<Damage> damages = damageRepository.findAll();
        //load file and compile it
        File file = ResourceUtils.getFile("classpath:Damage.jrxml");
        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
        JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource((Collection<?>) damages);
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("createdBy", "Java Techie");
        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, dataSource);
        if (reportFormat.equalsIgnoreCase("html")) {
            JasperExportManager.exportReportToHtmlFile(jasperPrint, path + "\\damage.html");
        }
        if (reportFormat.equalsIgnoreCase("pdf")) {
            JasperExportManager.exportReportToPdfFile(jasperPrint, path + "\\damage.pdf");
        }

        return "report generated in path : " + path;
    }

}


