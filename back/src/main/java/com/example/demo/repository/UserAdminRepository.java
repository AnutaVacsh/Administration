package com.example.demo.repository;

import com.example.demo.models.BackColor;
import com.example.demo.models.MyUser;
import com.example.demo.models.UserAdmin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserAdminRepository extends JpaRepository<UserAdmin, Integer> {
    List<UserAdmin> findByLogin(String login);
}
