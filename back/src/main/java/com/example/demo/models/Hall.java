package com.example.demo.models;

import jakarta.persistence.*;

@Table(name="Hall")
@Entity
public class Hall {
    @Id
    @Column(name = "Id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "NumberHall", nullable = false)
    private String numberHall;

    @Column(name = "Title", nullable = true)
    private String title;

    @Column(name = "Description", nullable = true)
    private String description;

    @Column(name = "PriceDays", nullable = false)
    private Integer priceDays;

    @Column(name = "PriceEnd", nullable = false)
    private Integer priceEnd;

    @Column(name = "Img", nullable = true)
    private String img;

    @Column(name = "Status", nullable = true)
    private String status;

    public Hall() {
    }

    public Hall(String numberHall, String title, String description, Integer priceDays, Integer priceEnd, String img) {
        this.numberHall = numberHall;
        this.title = title;
        this.description = description;
        this.priceDays = priceDays;
        this.priceEnd = priceEnd;
        this.img = img;
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

    public String getNumberHall() {
        return numberHall;
    }

    public void setNumberHall(String numberHall) {
        this.numberHall = numberHall;
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

    public Integer getPriceDays() {
        return priceDays;
    }

    public void setPriceDays(Integer priceDays) {
        this.priceDays = priceDays;
    }

    public Integer getPriceEnd() {
        return priceEnd;
    }

    public void setPriceEnd(Integer priceEnd) {
        this.priceEnd = priceEnd;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    @Override
    public String toString() {
        return "Hall{" +
                "id=" + id +
                ", numberHall='" + numberHall + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", priceDays=" + priceDays +
                ", priceEnd=" + priceEnd +
                ", img='" + img + '\'' +
                '}';
    }
}
