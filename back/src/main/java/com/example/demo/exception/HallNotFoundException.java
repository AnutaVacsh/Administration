package com.example.demo.exception;

public class HallNotFoundException extends RuntimeException{
    public HallNotFoundException(Integer id){
        super("Could not found hall "+ id);
    }
}
