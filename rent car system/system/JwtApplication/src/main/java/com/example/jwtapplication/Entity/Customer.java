package com.example.jwtapplication.Entity;


import jakarta.persistence.*;
import org.springframework.web.multipart.MultipartFile;

@Entity
@Table(name = "customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "nic")
    private String nic;


    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;


    @Column(name = "address")
    private String address;



//    @Transient
//    private MultipartFile imageFileNic;

    public Customer() {
    }

    public Customer(Long id, String name, String nic, String email, String phone, String address) {
        this.id = id;
        this.name = name;
        this.nic = nic;
        this.email = email;
        this.phone = phone;
        this.address = address;


    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }



//    public MultipartFile getImageFileNic() {
//        return imageFileNic;
//    }
//
//    public void setImageFileNic(MultipartFile imageFileNic) {
//        this.imageFileNic = imageFileNic;
//    }
}
