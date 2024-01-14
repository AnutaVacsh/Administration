package com.example.demo.controllers;

import com.example.demo.exception.LightNotFoundException;
import com.example.demo.models.Light;
import com.example.demo.repository.LightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("Light")
@CrossOrigin
public class LightController {
    @Autowired
    private LightRepository lightRepository;

    @GetMapping(value = "/allLight", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<Light>> response(){
        return ResponseEntity.status(HttpStatus.OK)
                .body(lightRepository.findAll());
    }

    @GetMapping(value = "/getLight/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Optional<Light>> getOneHall(@PathVariable Integer id){
        return ResponseEntity.status(HttpStatus.OK)
                .body(lightRepository.findById(id));
    }

    @PostMapping("/safeLight")
    public String safeLight(@RequestBody Light light){
        lightRepository.save(light);
        return "Add hall";
    }

    @PutMapping("editLight/{id}")
    public Light editLight(@RequestBody Light freshLight, @PathVariable Integer id){
        return lightRepository.findById(id)
                .map(h -> {
                    h.setTitle(freshLight.getTitle());
                    h.setDescription(freshLight.getDescription());
                    h.setPrice(freshLight.getPrice());
                    h.setImg(freshLight.getImg());
                    h.setStatus("есть");
                    return lightRepository.save(h);
                }).orElseThrow(() -> new LightNotFoundException(id));
    }


    @DeleteMapping("deleteLight/{id}")
    public void deleteLight(@PathVariable Integer id){
        if(lightRepository.existsById(id))
            lightRepository.deleteById(id);
        else throw new LightNotFoundException(id);
    }
}
