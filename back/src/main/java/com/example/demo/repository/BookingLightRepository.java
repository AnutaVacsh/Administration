package com.example.demo.repository;

import com.example.demo.models.BookingLight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;

import java.util.List;

public interface BookingLightRepository extends JpaRepository<BookingLight, Integer> {
}
