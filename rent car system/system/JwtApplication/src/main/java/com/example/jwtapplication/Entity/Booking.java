package com.example.jwtapplication.Entity;


import jakarta.persistence.*;

@Entity
@Table(name = "booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "cus_nic")
    private String cus_nic;

    @Column(name = "cus_email")
    private String cus_email;

    @Column(name = "cus_phone")
    private String cus_phone;

    @Column(name = "vehicle_id")
    private String vehicle_id;


    @Column(name = "from_date")
    private String from_date;
    @Column(name = "to_date")
    private String to_date;


    @Column(name = "posting_date")
    private String posting_date;



    @Column(name = "status")
    private String status;

    @Column(name = "is_deleted")
    private String is_deleted;


    public Booking() {
    }

    public Booking(Long id, String cus_nic, String cus_email, String cus_phone, String vehicle_id, String to_date, String posting_date, String status, String is_deleted,String from_date) {
        this.id = id;
        this.cus_nic = cus_nic;
        this.cus_email = cus_email;
        this.cus_phone = cus_phone;
        this.vehicle_id = vehicle_id;
        this.to_date = to_date;
        this.posting_date = posting_date;
        this.status = status;
        this.is_deleted = is_deleted;
        this.from_date=from_date;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCus_nic() {
        return cus_nic;
    }

    public void setCus_nic(String cus_nic) {
        this.cus_nic = cus_nic;
    }

    public String getCus_email() {
        return cus_email;
    }

    public void setCus_email(String cus_email) {
        this.cus_email = cus_email;
    }

    public String getCus_phone() {
        return cus_phone;
    }

    public void setCus_phone(String cus_phone) {
        this.cus_phone = cus_phone;
    }

    public String getVehicle_id() {
        return vehicle_id;
    }

    public void setVehicle_id(String vehicle_id) {
        this.vehicle_id = vehicle_id;
    }

    public String getTo_date() {
        return to_date;
    }

    public void setTo_date(String to_date) {
        this.to_date = to_date;
    }

    public String getPosting_date() {
        return posting_date;
    }

    public void setPosting_date(String posting_date) {
        this.posting_date = posting_date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getIs_deleted() {
        return is_deleted;
    }

    public void setIs_deleted(String is_deleted) {
        this.is_deleted = is_deleted;
    }

    public String getFrom_date() {
        return from_date;
    }

    public void setFrom_date(String from_date) {
        this.from_date = from_date;
    }


}
