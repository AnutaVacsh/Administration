package com.example.demo.repository;

import com.example.demo.models.Background;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BackgroundRepository extends JpaRepository<Background, Integer> {
}
