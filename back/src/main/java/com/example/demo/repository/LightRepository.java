package com.example.demo.repository;

import com.example.demo.models.Light;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LightRepository extends JpaRepository<Light, Integer> {

}
