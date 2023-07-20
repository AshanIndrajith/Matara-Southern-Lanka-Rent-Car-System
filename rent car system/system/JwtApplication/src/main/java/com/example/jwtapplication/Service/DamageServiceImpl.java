package com.example.jwtapplication.Service;

import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Repository.DamageRepository;
import net.sf.jasperreports.engine.JRException;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

public interface DamageServiceImpl {


    Iterable<Damage> getAllStudents();

    Damage saveDamage(Damage damage);

    Damage getDamageById(Long id);

   Damage updateDamage(Damage damage);

   void deleteStudentById(Long id);


    //String exportReport(String format) throws IOException, JRException;

    public List<Damage> findDamageDetailsByDateRange(String startDate, String endDate);

    public String exportReport(List<Damage> damages) throws FileNotFoundException, JRException;
}
