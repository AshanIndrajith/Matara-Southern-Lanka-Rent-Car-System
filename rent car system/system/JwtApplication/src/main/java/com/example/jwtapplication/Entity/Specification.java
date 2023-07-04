package com.example.jwtapplication.Entity;


import jakarta.persistence.*;

@Entity
@Table(name = "Specification")
public class Specification {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;



    @Column(name = "registered_number")
    private String reg_number;


    @Column(name = "seat")
    private String seat;

    @Column(name = "flue_type")
    private String flue_type;

    @Column(name = "transmission")
    private String transmission;

    @Column(name = "door")
    private int door;

    @Column(name = "capacity")
    private String capacity;

    @Column(name = "ac")
    private String ac;

    @Column(name = "average_fuel")
    private String average_fuel;

    @Column(name = "top_speed")
    private String top_speed;

    public Specification() {

    }

    public Specification(Long id, String reg_number, String seat, String flue_type, String transmission, int door, String capacity, String ac, String average_fuel, String top_speed) {
        this.id = id;
        this.reg_number = reg_number;
        this.seat = seat;
        this.flue_type = flue_type;
        this.transmission = transmission;
        this.door = door;
        this.capacity = capacity;
        this.ac = ac;
        this.average_fuel = average_fuel;
        this.top_speed = top_speed;
    }

    public Long getId() {
        return id;
    }

    public String getAc() {
        return ac;
    }

    public void setAc(String ac) {
        this.ac = ac;
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

    public String getSeat() {
        return seat;
    }

    public void setSeat(String seat) {
        this.seat = seat;
    }

    public String getFlue_type() {
        return flue_type;
    }

    public void setFlue_type(String flue_type) {
        this.flue_type = flue_type;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    public int getDoor() {
        return door;
    }

    public void setDoor(int door) {
        this.door = door;
    }

    public String getCapacity() {
        return capacity;
    }

    public void setCapacity(String capacity) {
        this.capacity = capacity;
    }

    public String getAverage_fuel() {
        return average_fuel;
    }

    public void setAverage_fuel(String average_fuel) {
        this.average_fuel = average_fuel;
    }

    public String getTop_speed() {
        return top_speed;
    }

    public void setTop_speed(String top_speed) {
        this.top_speed = top_speed;
    }
}
