package com.example.demo.controllers;

import com.example.demo.models.Booking;
import com.example.demo.models.MyUser;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@CrossOrigin
@RequestMapping("User")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(value = "/allUser", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<MyUser>> all(){
        return ResponseEntity.status(HttpStatus.OK)
                .body(userRepository.findAll());
    }

    @GetMapping(value = "/checkUser/{login}/{password}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Integer checkUser(@PathVariable String login, @PathVariable String password){
        for(MyUser u: userRepository.findByLogin(login)){
            if(Objects.equals(u.getPassword(), password)) return u.getId();
        }
        return -1;
    }

    @PostMapping("/safeUser")
    public Integer safeBooking(@RequestBody MyUser user){
        userRepository.save(user);
        return user.getId();
    }
}
