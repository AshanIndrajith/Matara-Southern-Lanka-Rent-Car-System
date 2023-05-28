package com.example.jwtapplication.Service;

import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Repository.DamageRepository;

public interface DamageServiceImpl {


    Iterable<Damage> getAllStudents();

    Damage saveDamage(Damage damage);
//
    Damage getDamageById(Long id);
//
   Damage updateDamage(Damage damage);
//
  void deleteStudentById(Long id);





}
