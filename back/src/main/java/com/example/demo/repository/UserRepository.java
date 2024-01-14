package com.example.demo.repository;

import com.example.demo.models.MyUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<MyUser, Integer> {
    List<MyUser> findByLogin(String login);
}
