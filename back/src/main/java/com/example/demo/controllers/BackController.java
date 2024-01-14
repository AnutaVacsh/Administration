package com.example.demo.controllers;

import com.example.demo.exception.BackNotFoundException;
import com.example.demo.exception.LightNotFoundException;
import com.example.demo.models.Background;
import com.example.demo.models.Light;
import com.example.demo.repository.BackgroundRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("Back")
@CrossOrigin
public class BackController {

    @Autowired
    private BackgroundRepository backgroundRepository;

    @GetMapping(value = "/allBack", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<Background>> response(){
        return ResponseEntity.status(HttpStatus.OK)
                .body(backgroundRepository.findAll());
    }

    @GetMapping(value = "/getBack/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Optional<Background>> getOneBack(@PathVariable Integer id){
        return ResponseEntity.status(HttpStatus.OK)
                .body(backgroundRepository.findById(id));
    }

    @PostMapping("/safeBack")
    public String safeBack(@RequestBody Background back){
        backgroundRepository.save(back);
        return "Add background";
    }

    @PutMapping("editBack/{id}")
    public Background editBack(@RequestBody Background freshBack, @PathVariable Integer id){
        return backgroundRepository.findById(id)
                .map(h -> {
                    h.setTitle(freshBack.getTitle());
                    h.setDescription(freshBack.getDescription());
                    h.setPrice(freshBack.getPrice());
                    h.setImg(freshBack.getImg());
                    h.setStatus("есть");
                    return backgroundRepository.save(h);
                }).orElseThrow(() -> new BackNotFoundException(id));
    }


    @DeleteMapping("deleteBack/{id}")
    public void deleteBack(@PathVariable Integer id){
        if(backgroundRepository.existsById(id))
            backgroundRepository.deleteById(id);
        else throw new BackNotFoundException(id);
    }
}
