package com.example.jwtapplication.Service;

import com.example.jwtapplication.DTO.DamageDTO;
import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Repository.DamageRepo;
import com.example.jwtapplication.Util.VarList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
@Transactional
public class DamageService {


    @Autowired
    private DamageRepo damageRepo;
    //save method
    @Autowired
    private ModelMapper modelMapper;


    public String SaveDamage(DamageDTO damageDTO) {

        if(damageRepo.existsById(damageDTO.getId())){
            return VarList.RSP_DUPLICATED;
        }
        else{
            damageRepo.save(modelMapper.map(damageDTO,Damage.class));
            return VarList.RSP_DUPLICATED;
        }
    }



    //get all data
    public List<DamageDTO>getAllDamage(){
        List<Damage> damageList=damageRepo.findAll();
        return modelMapper.map(damageList,new TypeToken<ArrayList<DamageDTO>>(){
        }.getType());
    }


    //update method
    public String updateDamage(DamageDTO damageDTO){
        if(damageRepo.existsById(damageDTO.getId())){
            damageRepo.save(modelMapper.map(damageDTO,Damage.class));
            return  VarList.RSP_SUCCESS;
        }else{
            return VarList.RSP_NO_DATA_FOUND;
        }
    }



    //search
    public DamageDTO searchDamage(int id){
        if(damageRepo.existsById(id)){
            Damage dmg=damageRepo.findById(id).orElse(null);
            return modelMapper.map(dmg,DamageDTO.class);
        } else{
            return null;
        }
    }

    //delete
    public String deleteDamage(int id){
        if(damageRepo.existsById(id)){
            damageRepo.deleteById(id);
            return VarList.RSP_SUCCESS;
        }else{
            return VarList.RSP_NO_DATA_FOUND;
        }
    }


    public DamageDTO getDamageById(int id) {
        Optional<Damage> damageList=damageRepo.findById(id);
        if(damageList.isPresent()){
            return modelMapper.map(damageList.get(),DamageDTO.class);
        } else {
            return null;
        }
    }
}
