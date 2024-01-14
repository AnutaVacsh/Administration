package com.example.demo.models;

import jakarta.persistence.*;

@Table(name = "BookingLight")
@Entity
public class BookingLight {
    @Id
    @Column(name = "Id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "IdBooking", nullable = false)
    private Integer idBooking;

    @Column(name = "IdLight", nullable = false)
    private Integer idLight;

    public BookingLight() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdBooking() {
        return idBooking;
    }

    public void setIdBooking(Integer idBooking) {
        this.idBooking = idBooking;
    }

    public Integer getIdLight() {
        return idLight;
    }

    public void setIdLight(Integer idLight) {
        this.idLight = idLight;
    }
}
