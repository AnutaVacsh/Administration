package com.example.demo.exception;

public class BackNotFoundException extends RuntimeException{
    public BackNotFoundException(Integer id){
        super("Could not found background "+ id);
    }
}
