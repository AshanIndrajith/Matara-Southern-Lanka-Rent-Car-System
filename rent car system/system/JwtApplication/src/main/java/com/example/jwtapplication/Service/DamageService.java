package com.example.jwtapplication.Service;

import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Repository.DamageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class DamageService  implements  DamageServiceImpl{

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
        return  damageRepository.save(damage);
    }

//    @Override
//    public Damage getStudentById(Long id) {
//        Optional<Damage> damageOptional = damageRepository.findById(id);
//        return damageOptional.orElse(null);
//    }
//
//    @Override
//    public Damage updateStudent(Damage student) {
//        return damageRepository.save(student);
//    }

    @Override
    public void deleteStudentById(Long id) {
        damageRepository.deleteById(Math.toIntExact(id));

    }
}
