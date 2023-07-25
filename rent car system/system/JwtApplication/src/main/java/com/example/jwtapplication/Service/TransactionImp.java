package com.example.jwtapplication.Service;

import com.example.jwtapplication.Entity.Booking;
import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Entity.Transaction;
import net.sf.jasperreports.engine.JRException;

import java.io.FileNotFoundException;
import java.util.List;

public interface TransactionImp {

    public Iterable<Transaction> getAllTransaction();


    public List<Transaction> findTransactionDetailsByDateRange(String startDate, String endDate);


    public String exportIncomeReport(List<Transaction> transactions) throws FileNotFoundException, JRException;
}
