package com.example.demo.models;

import jakarta.persistence.*;

import java.util.Date;

@Table(name = "Booking")
@Entity
public class Booking {
    @Id
    @Column(name = "Id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "Year", nullable = true)
    private Integer year;

    @Column(name = "Month", nullable = true)
    private Integer month;

    @Column(name = "Day", nullable = true)
    private Integer day;

    @Column(name = "Time", nullable = false)
    private Integer time;

    @Column(name = "IdHall", nullable = false)
    private Integer idHall;

    @Column(name = "IdBack", nullable = true)
    private Integer idBack;

    @Column(name = "IdUser", nullable = false)
    private Integer idUser;

    @Column(name = "State", nullable = false)
    private String state;

    @Column(name = "Price", nullable = true)
    private Integer price;

    public Booking(){}

    public Booking(Integer id, Integer year, Integer month, Integer day, Integer time, Integer idHall, Integer idBack, Integer idUser, String state, Integer price) {
        this.id = id;
        this.year = year;
        this.month = month;
        this.day = day;
        this.time = time;
        this.idHall = idHall;
        this.idBack = idBack;
        this.idUser = idUser;
        this.state = state;
        this.price = price;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Integer getDay() {
        return day;
    }

    public void setDay(Integer day) {
        this.day = day;
    }

    public Integer getTime() {
        return time;
    }

    public void setTime(Integer time) {
        this.time = time;
    }

    public Integer getIdHall() {
        return idHall;
    }

    public void setIdHall(Integer idHall) {
        this.idHall = idHall;
    }

    public Integer getIdBack() {
        return idBack;
    }

    public void setIdBack(Integer idBack) {
        this.idBack = idBack;
    }

    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }
}
