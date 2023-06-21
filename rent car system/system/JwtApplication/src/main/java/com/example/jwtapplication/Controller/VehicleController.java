package com.example.jwtapplication.Controller;


import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Entity.Vehicle;
import com.example.jwtapplication.Service.DamageServiceImpl;
import com.example.jwtapplication.Service.VehicleServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("/vehicle")
public class VehicleController {

    @Autowired
    private VehicleServiceImpl vehicleService;


    @GetMapping("/view")
    @ResponseBody
    public ResponseEntity<List<Vehicle>> listVehicle() {
        Iterable<Vehicle> vehicleList = vehicleService.getAllVehicle();
        return ResponseEntity.ok((List<Vehicle>) vehicleList);
    }


}
