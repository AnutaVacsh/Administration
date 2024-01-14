package com.example.demo.controllers;

import com.example.demo.models.Booking;
import com.example.demo.models.BookingLight;
import com.example.demo.repository.BookingLightRepository;
import com.example.demo.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("BookingLight")
public class BookingLightController {

    @Autowired
    private BookingLightRepository bookingLightRepository;

    @GetMapping(value = "/allBookingLight", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<BookingLight>> all(){
        return ResponseEntity.status(HttpStatus.OK)
                .body(bookingLightRepository.findAll());
    }

    @PostMapping("/safeBookingLight")
    public String safeBooking(@RequestBody BookingLight...bookingLight){
        for(BookingLight bl: bookingLight)
            bookingLightRepository.save(bl);
        return "Add bookingLight";
    }

//    @GetMapping(value = "/joinBookingLight", produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<Iterable<Object>> join(){
//        return ResponseEntity.status(HttpStatus.OK)
//                .body(bookingLightRepository.getJoinBookingLight());
//    }
}
