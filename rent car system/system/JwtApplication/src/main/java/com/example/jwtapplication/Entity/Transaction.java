package com.example.jwtapplication.Entity;


import jakarta.persistence.*;

@Entity
@Table(name = "transaction")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(name = "booking_id")
    private int booking_id;


    @Column(name = "posting_id")
    private String posting_id;


    @Column(name = "amount")
    private Double amount;


    public Transaction() {
    }

    public Transaction(Long id, int booking_id, String posting_id, Double amount) {
        this.id = id;
        this.booking_id = booking_id;
        this.posting_id = posting_id;
        this.amount = amount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getBooking_id() {
        return booking_id;
    }

    public void setBooking_id(int booking_id) {
        this.booking_id = booking_id;
    }

    public String getPosting_id() {
        return posting_id;
    }

    public void setPosting_id(String posting_id) {
        this.posting_id = posting_id;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }
}
