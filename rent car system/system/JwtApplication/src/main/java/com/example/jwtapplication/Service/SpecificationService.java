package com.example.jwtapplication.Service;


import com.example.jwtapplication.Entity.Specification;
import com.example.jwtapplication.Repository.SpecificationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SpecificationService implements SpecificationServiceImpl {
    @Autowired
    private SpecificationRepo specificationRepo;

    public SpecificationService(SpecificationRepo specificationRepo) {
        this.specificationRepo = specificationRepo;
    }

    @Override
    public Specification saveSpecification(Specification specification) {
        return specificationRepo.save(specification);
    }
}
