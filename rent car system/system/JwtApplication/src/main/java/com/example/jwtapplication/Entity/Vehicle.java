package com.example.jwtapplication.Entity;


import jakarta.persistence.*;
import org.springframework.web.multipart.MultipartFile;

@Entity
@Table(name = "Vehicle")
public class Vehicle {


    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "registered_number")
    private String reg_number;


    @Column(name = "image")
    private String imageName;

    @Column(name = "price_per_day")
    private Double dprice;


    @Column(name = "additional_price_per_km")
    private Double akmprice;


    @Column(name = "additional_price_per_hour")
    private Double add_hour_price;


    @Column(name = "system_registered_date")
    private String system_registered_date;

    @Column(name = "insurence_date")
    private String insurence_date;

    @Column(name = "revenue_license_date")
    private String revenue_license_date;

    @Column(name = "is_service_out")
    private int is_service_out;


    @Column(name = "is_deleted")
    private int is_deleted;


    @Transient
    private MultipartFile imageFile;


    public Vehicle() {
    }

    public Vehicle(Long id, String title, String reg_number, String imageName, Double dprice, Double akmprice, Double add_hour_price, String system_registered_date, String insurence_date, String revenue_license_date, int is_service_out, int is_deleted, MultipartFile imageFile) {
        this.id = id;
        this.title = title;
        this.reg_number = reg_number;
        this.imageName = imageName;
        this.dprice = dprice;
        this.akmprice = akmprice;
        this.add_hour_price = add_hour_price;
        this.system_registered_date = system_registered_date;
        this.insurence_date = insurence_date;
        this.revenue_license_date = revenue_license_date;
        this.is_service_out = is_service_out;
        this.is_deleted = is_deleted;
        this.imageFile = imageFile;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getReg_number() {
        return reg_number;
    }

    public void setReg_number(String reg_number) {
        this.reg_number = reg_number;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
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

    public String getSystem_registered_date() {
        return system_registered_date;
    }

    public void setSystem_registered_date(String system_registered_date) {
        this.system_registered_date = system_registered_date;
    }

    public String getInsurence_date() {
        return insurence_date;
    }

    public void setInsurence_date(String insurence_date) {
        this.insurence_date = insurence_date;
    }

    public String getRevenue_license_date() {
        return revenue_license_date;
    }

    public void setRevenue_license_date(String revenue_license_date) {
        this.revenue_license_date = revenue_license_date;
    }

    public int getIs_service_out() {
        return is_service_out;
    }

    public void setIs_service_out(int is_service_out) {
        this.is_service_out = is_service_out;
    }

    public int getIs_deleted() {
        return is_deleted;
    }

    public void setIs_deleted(int is_deleted) {
        this.is_deleted = is_deleted;
    }

    public MultipartFile getImageFile() {
        return imageFile;
    }

    public void setImageFile(MultipartFile imageFile) {
        this.imageFile = imageFile;
    }
}
