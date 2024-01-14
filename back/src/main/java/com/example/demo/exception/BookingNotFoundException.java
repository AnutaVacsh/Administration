package com.example.demo.exception;

import com.example.demo.models.Booking;

public class BookingNotFoundException extends RuntimeException{
    public BookingNotFoundException(Integer id){
        super("Could not found booking "+ id);
    }
}
