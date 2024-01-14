package com.example.demo.controllers;

import com.example.demo.exception.BookingNotFoundException;
import com.example.demo.models.Booking;
import com.example.demo.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("Booking")
public class BookingController {
    @Autowired
    private BookingRepository bookingRepository;

    @GetMapping(value = "/allBooking", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<Booking>> all(){
        return ResponseEntity.status(HttpStatus.OK)
                .body(bookingRepository.findAll());
    }

    //взять все брони одного пользователя
    @GetMapping(value = "/userBooking/{idU}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<Booking>> userBooking(@PathVariable Integer idU){
        return ResponseEntity.status(HttpStatus.OK)
                .body(bookingRepository.findByIdUser(idU));
    }

    //Booking/safeBooking
    @PostMapping("/safeBooking")
    public Integer safeBooking(@RequestBody Booking booking){
        bookingRepository.save(booking);
        return booking.getId();
    }

    // изменить статус
    @PutMapping("editState/{id}")
    public Booking editState(@RequestBody String state, @PathVariable Integer id){
        return bookingRepository.findById(id)
                .map(b -> {
                    b.setState(state);
                    return bookingRepository.save(b);
                }).orElseThrow(() -> new BookingNotFoundException(id));
    }
}
