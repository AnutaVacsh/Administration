package com.example.demo.models;

import jakarta.persistence.*;

@Table(name="Light")
@Entity
public class Light {
    @Id
    @Column(name = "Id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "Title", nullable = false)
    private String title;

    @Column(name = "Description", nullable = true)
    private String description;

    @Column(name = "Price", nullable = false)
    private Integer price;

    @Column(name = "Img", nullable = true)
    private String img;

    @Column(name = "Status", nullable = true)
    private String status;

    public Light() {
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}
