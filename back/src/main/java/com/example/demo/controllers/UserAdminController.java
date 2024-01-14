package com.example.demo.controllers;

import com.example.demo.models.MyUser;
import com.example.demo.models.UserAdmin;
import com.example.demo.repository.UserAdminRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@CrossOrigin
@RequestMapping("UserAdmin")
public class UserAdminController {

    @Autowired
    private UserAdminRepository userAdminRepository;

    @GetMapping(value = "/allAdmin", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<UserAdmin>> all(){
        return ResponseEntity.status(HttpStatus.OK)
                .body(userAdminRepository.findAll());
    }

    @GetMapping(value = "/checkAdmin/{login}/{password}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Integer checkUser(@PathVariable String login, @PathVariable String password){
        for(UserAdmin u: userAdminRepository.findByLogin(login)){
            if(Objects.equals(u.getPassword(), password)) return u.getId();
        }
        return -1;
    }
}
