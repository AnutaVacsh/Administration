package com.example.demo.controllers;

import com.example.demo.exception.BackNotFoundException;
import com.example.demo.models.BackColor;
import com.example.demo.models.Background;
import com.example.demo.models.Hall;
import com.example.demo.repository.BackColorRepository;
import com.example.demo.repository.HallRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("BackColor")
public class BackColorController {
    @Autowired
    private BackColorRepository backColorRepository;

    @GetMapping(value = "/allBackColor", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<BackColor>> all(){
        return ResponseEntity.status(HttpStatus.OK)
                .body(backColorRepository.findAll());
    }

    @PostMapping("/safeBackColor")
    public String safeBackColor(@RequestBody BackColor...colors){
        for(BackColor color: colors)
            backColorRepository.save(color);
        return "Add background";
    }

    @DeleteMapping("deleteBackColor")
    public void deleteBackColor(@RequestBody Integer...id){
        for(Integer i: id) {
            if (backColorRepository.existsById(i))
                backColorRepository.deleteById(i);
            else throw new BackNotFoundException(i);
        }
    }
}
