package com.example.demo.models;

import jakarta.persistence.*;

@Table(name = "BackColor")
@Entity
public class BackColor {
    @Id
    @Column(name = "Id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "IdBack", nullable = false)
    private Integer idBack;

    @Column(name = "Color", nullable = false)
    private String color;

    @Column(name = "Status", nullable = true)
    private String status;

    public BackColor() {
    }

    public Integer getIdBack() {
        return idBack;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setIdBack(Integer idBack) {
        this.idBack = idBack;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
