package com.example.jwtapplication.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Entity
@Table(name = "Damage")
public class Damage {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "vehicle_id")
    private String vehicle_id;

    @Column(name = "description")
    private String description;


    @Column(name = "date")
    private String date;


    @Column(name = "image_name")
    private String imageName;


    @Column(name = "amount")
    private Double amount;

    @Transient
    private MultipartFile imageFile;

    public Damage() {
    }

    public Damage(Long id, String vehicle_id, String description, String date, String imageName, Double amount, MultipartFile imageFile) {
        this.id = id;
        this.vehicle_id = vehicle_id;
        this.description = description;
        this.date = date;
        this.imageName = imageName;
        this.amount = amount;
        this.imageFile = imageFile;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVehicle_id() {
        return vehicle_id;
    }

    public void setVehicle_id(String vehicle_id) {
        this.vehicle_id = vehicle_id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public MultipartFile getImageFile() {
        return imageFile;
    }

    public void setImageFile(MultipartFile imageFile) {
        this.imageFile = imageFile;
    }


    @Override
    public String toString() {
        return "Damage{" +
                "id=" + id +
                ", vehicle_id='" + vehicle_id + '\'' +
                ", description='" + description + '\'' +
                ", date='" + date + '\'' +
                ", imageName='" + imageName + '\'' +
                ", amount=" + amount +
                ", imageFile=" + imageFile +
                '}';
    }
}
