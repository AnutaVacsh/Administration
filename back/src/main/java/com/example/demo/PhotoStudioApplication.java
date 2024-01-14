package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication//(scanBasePackages = "com.example.demo")
public class PhotoStudioApplication {
	public static void main(String[] args) {
		SpringApplication.run(PhotoStudioApplication.class, args);

	}
}
