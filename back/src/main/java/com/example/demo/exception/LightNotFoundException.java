package com.example.demo.exception;

public class LightNotFoundException extends RuntimeException{
    public LightNotFoundException(Integer id){
        super("Could not found light "+ id);
    }
}
