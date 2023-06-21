package com.example.jwtapplication.Entity;


import jakarta.persistence.*;
import org.springframework.web.multipart.MultipartFile;

@Entity
@Table(name = "Vehicle")
public class Vehicle {


    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "Reg_Number")
    private String reg_number;

    @Column(name = "Fuel_Type")
    private String fuel_type;


    @Column(name = "Seat")
    private String seat;


    @Column(name = "AC")
    private String ac;


    @Column(name = "Image")
    private String image;

    @Column(name = "dprice")
    private Double dprice;


    @Column(name = "add_km_price")
    private Double akmprice;


    @Column(name = "add_hour_price")
    private Double add_hour_price;

    @Transient
    private MultipartFile imageFile;


    public Vehicle() {
    }

    public Vehicle(Long id, String reg_number, String fuel_type, String seat, String ac, String image, Double dprice, Double akmprice, Double add_hour_price, MultipartFile imageFile) {
        this.id = id;
        this.reg_number = reg_number;
        this.fuel_type = fuel_type;
        this.seat = seat;
        this.ac = ac;
        this.image = image;
        this.dprice = dprice;
        this.akmprice = akmprice;
        this.add_hour_price = add_hour_price;
        this.imageFile = imageFile;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReg_number() {
        return reg_number;
    }

    public void setReg_number(String reg_number) {
        this.reg_number = reg_number;
    }

    public String getFuel_type() {
        return fuel_type;
    }

    public void setFuel_type(String fuel_type) {
        this.fuel_type = fuel_type;
    }

    public String getSeat() {
        return seat;
    }

    public void setSeat(String seat) {
        this.seat = seat;
    }

    public String getAc() {
        return ac;
    }

    public void setAc(String ac) {
        this.ac = ac;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Double getDprice() {
        return dprice;
    }

    public void setDprice(Double dprice) {
        this.dprice = dprice;
    }

    public Double getAkmprice() {
        return akmprice;
    }

    public void setAkmprice(Double akmprice) {
        this.akmprice = akmprice;
    }

    public Double getAdd_hour_price() {
        return add_hour_price;
    }

    public void setAdd_hour_price(Double add_hour_price) {
        this.add_hour_price = add_hour_price;
    }

    public MultipartFile getImageFile() {
        return imageFile;
    }

    public void setImageFile(MultipartFile imageFile) {
        this.imageFile = imageFile;
    }
}
