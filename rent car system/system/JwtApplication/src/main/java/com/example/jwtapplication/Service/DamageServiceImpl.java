package com.example.jwtapplication.Service;

import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Repository.DamageRepository;

public interface DamageServiceImpl {


    Iterable<Damage> getAllStudents();

    Damage saveDamage(Damage damage);
//
//    Damage getStudentById(Long id);
//
//    Damage updateStudent(Damage student);
//
  void deleteStudentById(Long id);



}
