package com.example.jwtapplication.Controller;


import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Entity.Vehicle;
import com.example.jwtapplication.Service.DamageServiceImpl;
import com.example.jwtapplication.Service.VehicleService;
import com.example.jwtapplication.Service.VehicleServiceImpl;
import com.example.jwtapplication.Util.FileUploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("/vehicle")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;


    @GetMapping("/view")
    @ResponseBody
    public ResponseEntity<List<Vehicle>> listVehicle() {
        Iterable<Vehicle> vehicleList = vehicleService.getAllVehicle();
        return ResponseEntity.ok((List<Vehicle>) vehicleList);
    }



    @PostMapping("/vehicleSave")
    @CrossOrigin("*")
    public ResponseEntity<String> saveVehicle(Vehicle vehicle, @RequestParam("image") MultipartFile multipartFile) {
        try {
            if (!multipartFile.isEmpty()) {
                String filename = StringUtils.cleanPath(multipartFile.getOriginalFilename());
                vehicle.setImageName(filename);
                Vehicle savedVehicle = vehicleService.saveVehicle(vehicle);
                String uploadPath = "vehicle/" + savedVehicle.getId();

                FileUploadUtil.saveFile(uploadPath, filename, multipartFile);
            } else {
                if (vehicle.getImageFile().isEmpty()) {
                    vehicle.setImageFile(null);
                }
                vehicleService.saveVehicle(vehicle);
            }

            return ResponseEntity.ok("vehicle saved successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error occurred while saving vehicle: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An unexpected error occurred: " + e.getMessage());
        }
    }



    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteVehicle(@PathVariable Long id) {
        try {
                  vehicleService.deleteVehicleById(id);
            return ResponseEntity.ok("vehicle deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error occurred while deleting vehicle: " + e.getMessage());
        }
    }

    @GetMapping("/get/{id}")
    @ResponseBody
    public ResponseEntity<Vehicle> getDamageById(@PathVariable Long id) {
        Vehicle vehicle = vehicleService.getVehicleById(id);
        if (vehicle == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(vehicle);
    }



//    @PutMapping("/update/{id}")
//    public ResponseEntity<?> updateVehicle(@PathVariable("id") Long id, @RequestBody Vehicle updateVehicle) {
//        Vehicle  existingVehicle = vehicleService.getVehicleById(id);
//        if (existingVehicle != null) {
//
//            existingVehicle.setReg_number(updateVehicle.getReg_number());
//            existingVehicle.setFuel_type(updateVehicle.getFuel_type());
//            existingVehicle.setSeat(updateVehicle.getSeat());
//            existingVehicle.setAc(updateVehicle.getAc());
//            existingVehicle.setDprice(updateVehicle.getDprice());
//            existingVehicle.setAkmprice(updateVehicle.getAkmprice());
//            existingVehicle.setAdd_hour_price(updateVehicle.getAdd_hour_price());
//
//
//            Vehicle vehicleDamageObj = vehicleService.updateVehicle(existingVehicle);
//            return ResponseEntity.ok(vehicleDamageObj);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }




    @GetMapping("/vehTotal")
    public ResponseEntity<Integer> getTotalVehicle() {
        int All = vehicleService.getTotalVehicle();
        return ResponseEntity.ok(All);
    }



}
