package com.example.jwtapplication.Controller;

import com.example.jwtapplication.Entity.Vehicle;
import com.example.jwtapplication.Model.User;
import com.example.jwtapplication.Service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private AuthenticationService authenticationService;

    @GetMapping
    public ResponseEntity<String> welcome(){
        return ResponseEntity.ok("Hey Man..Finally Hahh");
    }


    @GetMapping("/getUser/{email}")
    @ResponseBody
    public ResponseEntity<List<User>> getUserDetails(@PathVariable String email) {
        System.out.println(email);
        List<User> user = authenticationService.findByUserEmail(email);

        if (user.isEmpty()) {
            // Error message: No user found
            System.out.println("No user found with email: " + email);
            return ResponseEntity.notFound().build();
        }

        // Success message: user found
        System.out.println("user found with registration number: " + email);
        return ResponseEntity.ok(user);
    }
}
