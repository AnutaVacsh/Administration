package com.example.demo.controllers;

import com.example.demo.exception.HallNotFoundException;
import com.example.demo.models.Hall;
import com.example.demo.repository.HallRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("Hall")
public class HallController {
    @Autowired
    private HallRepository hallRepository;

    @GetMapping(value = "/allHall", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<Hall>> getHall(){
        return ResponseEntity.status(HttpStatus.OK)
                .body(hallRepository.findAll());
    }

    @GetMapping(value = "/getHall/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Optional<Hall>> getOneHall(@PathVariable Integer id){
        return ResponseEntity.status(HttpStatus.OK)
                .body(hallRepository.findById(id));
    }

    @PostMapping("/safeHall")
    public String safeHall(@RequestBody Hall hall){
        hallRepository.save(hall);
        return "Add hall";
    }

    @PutMapping("editHall/{id}")
    public Hall editHall(@RequestBody Hall freshHall, @PathVariable Integer id){
        return hallRepository.findById(id)
                .map(h -> {
                    h.setNumberHall(freshHall.getNumberHall());
                    h.setTitle(freshHall.getTitle());
                    h.setDescription(freshHall.getDescription());
                    h.setPriceDays(freshHall.getPriceDays());
                    h.setPriceEnd(freshHall.getPriceEnd());
                    h.setImg(freshHall.getImg());
                    h.setStatus("есть");
                    return hallRepository.save(h);
                }).orElseThrow(() -> new HallNotFoundException(id));
    }


    @DeleteMapping("deleteHall/{id}")
    public void deleteHall(@PathVariable Integer id){
        if(hallRepository.existsById(id))
            hallRepository.deleteById(id);
        else throw new HallNotFoundException(id);
    }
}
