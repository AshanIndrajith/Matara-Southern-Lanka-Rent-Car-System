package com.example.jwtapplication.Controller;


import com.example.jwtapplication.Entity.Booking;
import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Entity.Transaction;
import com.example.jwtapplication.Repository.TransactionRepo;
import com.example.jwtapplication.Service.TransactionImp;
import com.example.jwtapplication.Service.TransactionService;
import com.example.jwtapplication.Service.VehicleService;
import net.sf.jasperreports.engine.JRException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("/transaction")
public class TransactionController {


    @Autowired
    private TransactionService transactionService;



    @GetMapping("/view")
    @ResponseBody
    public ResponseEntity<List<Transaction>> listTransaction() {
        Iterable<Transaction> TransactionList = transactionService.getAllTransaction();
        return ResponseEntity.ok((List<Transaction>) TransactionList);
    }



    @GetMapping("/availableTransaction")
    public ResponseEntity<List<Transaction>> getAvailableTransaction(
            @RequestParam("startDate") String startDate,
            @RequestParam("endDate") String endDate
    ) throws JRException, FileNotFoundException {
        List<Transaction> availableTransaction = transactionService.findTransactionDetailsByDateRange(startDate, endDate);

        if (availableTransaction.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            // Assuming transactionService.exportReport() generates the report and returns its file path.
            String reportPath = transactionService.exportIncomeReport(availableTransaction);
            return ResponseEntity.ok(availableTransaction);
        }
    }







}
