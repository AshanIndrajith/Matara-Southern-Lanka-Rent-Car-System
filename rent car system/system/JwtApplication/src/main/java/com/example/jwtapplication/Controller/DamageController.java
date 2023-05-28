package com.example.jwtapplication.Controller;


import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Service.DamageService;
import com.example.jwtapplication.Service.DamageServiceImpl;
import com.example.jwtapplication.Util.FileUploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


@Controller
@CrossOrigin
@RequestMapping("/damage")
public class DamageController {
    @Autowired
    private DamageServiceImpl damageService;




//    @GetMapping("/students")
//    public String listStudents(Model model) {
//        model.addAttribute("studentlist", studentService.getAllStudents());
//
//        return null;
//
//    }


    @GetMapping("/view")
    @ResponseBody
    public ResponseEntity<List<Damage>> listStudents() {
        Iterable<Damage> damageList = damageService.getAllStudents();
        return ResponseEntity.ok((List<Damage>) damageList);
    }



    @PostMapping("/damageSave")
    public ResponseEntity<String> saveDamage(Damage damage, @RequestParam("image") MultipartFile multipartFile) {
        try {
            if (!multipartFile.isEmpty()) {
                String filename = StringUtils.cleanPath(multipartFile.getOriginalFilename());
                damage.setImageName(filename);
                Damage savedDamage = damageService.saveDamage(damage);
                String uploadPath = "images/" + savedDamage.getId();

                FileUploadUtil.saveFile(uploadPath, filename, multipartFile);
            } else {
                if (damage.getImageFile().isEmpty()) {
                    damage.setImageFile(null);
                }
                damageService.saveDamage(damage);
            }

            return ResponseEntity.ok("Damage saved successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error occurred while saving damage: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An unexpected error occurred: " + e.getMessage());
        }
    }


//    @GetMapping("/students/new")
//    public String createStudentForm(Model model) {
//
//        // create student object to hold student form data
//        Student student = new Student();
//        model.addAttribute("student", student);
//        return "create_student";
//
//    }

//    @PostMapping("/damageSave")
//    public String saveDamage(Damage damage,@RequestParam("image") MultipartFile multipartFile) throws IOException {
//        if (!multipartFile.isEmpty()){
//            String filename= StringUtils.cleanPath(multipartFile.getOriginalFilename());
//            damage.setImageName(filename);
//            Damage damage1=damageService.saveDamage(damage);
//            String upload="images/"+damage.getId();
//
//            FileUploadUtil.saveFile(upload,filename,multipartFile);
//
//
//
//        }else{
//            if (damage.getImageFile().isEmpty()){
//                damage.setImageFile(null);
//                damageService.saveDamage(damage);
//            }
//        }
//        damageService.saveDamage(damage);
//
//        return "damage";
//    }
//
//    @GetMapping("/students/edit/{id}")
//    public String editStudentForm(@PathVariable Long id, Model model) {
//        model.addAttribute("student", studentService.getStudentById(id));
//        return "edit_student";
//    }
//
//    @PostMapping("/students/{id}")
//    public String updateStudent(@PathVariable Long id,
//                                @ModelAttribute("student") Student student,
//                                Model model) {
//
        // get student from database by id
//        Student existingStudent = studentService.getStudentById(id);
//        existingStudent.setId(id);
//        existingStudent.setVehicle_id(student.getVehicle_id());
//        existingStudent.setDescription(student.getDescription());
//        existingStudent.setDamage_date(student.getDamage_date());
//        existingStudent.setImage(student.getImage());
//        existingStudent.setAmount(student.getAmount());
//
//
//        // save updated student object
//        studentService.updateStudent(existingStudent);
//        return "redirect:/students";
//    }
    // handler method to handle delete student request

//    @DeleteMapping("/student/delete/{id}")
//    public String deleteStudent(@PathVariable Long id) {
//        studentService.deleteStudentById(id);
//        return "students";
//    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Long id) {
        try {
            damageService.deleteStudentById(id);
            return ResponseEntity.ok("Student deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error occurred while deleting student: " + e.getMessage());
        }
    }




//    @PutMapping("/students/update/{id}")
//    public ResponseEntity<?> updateStudent(@PathVariable Long id, @RequestBody Student updatedStudent) {
//        Student existingStudent = studentService.getStudentById(id);
//        if (existingStudent != null) {
//            existingStudent.setVehicle_id(updatedStudent.getVehicle_id());
//            existingStudent.setDescription(updatedStudent.getDescription());
//            existingStudent.setDate(updatedStudent.getDate());
//            existingStudent.setImageName(updatedStudent.getImageName());
//            existingStudent.setAmount(updatedStudent.getAmount());
//            existingStudent.setImageFile(updatedStudent.getImageFile());
//
//            Student updatedStudentObj = studentService.updateStudent(existingStudent);
//            return new ResponseEntity<>(updatedStudentObj, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>("Student not found", HttpStatus.NOT_FOUND);
//        }
//    }









}
