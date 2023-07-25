package com.example.jwtapplication.Service;


import com.example.jwtapplication.Entity.Booking;
import com.example.jwtapplication.Entity.Damage;
import com.example.jwtapplication.Entity.Transaction;
import com.example.jwtapplication.Repository.TransactionRepo;
import com.example.jwtapplication.Repository.VehicleRepo;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileNotFoundException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TransactionService implements TransactionImp {


    @Autowired
    private TransactionRepo transactionRepo;

    public TransactionService(TransactionRepo transactionRepo) {
        super();
        this.transactionRepo = transactionRepo;
    }


    @Override
    public Iterable<Transaction> getAllTransaction() {
        return (List<Transaction>) transactionRepo.findAll();
    }

    @Override
    public List<Transaction> findTransactionDetailsByDateRange(String startDate, String endDate) {
        return transactionRepo.findAllByDateRange(startDate, endDate);
    }


    @Override
    public String exportIncomeReport(List<Transaction> transactions) throws FileNotFoundException, JRException {
        String folderPath = "C:\\Users\\INSIGHT\\Desktop\\New folder";

        // Load the JRXML file and compile it
        File file = ResourceUtils.getFile("classpath:Transaction.jrxml");
        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());

        // Create a data source from the list of damages
        JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(transactions);

        // Set report parameters
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("createdBy", "Java Techie");
        // Fill the report with data
        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, dataSource);

        // Generate a unique file name using timestamp
        String timestamp = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
        String fileName = "transaction" + timestamp + ".pdf";
        String outputPath = folderPath + "\\" + fileName;

        // Export the report to the PDF format
        JasperExportManager.exportReportToPdfFile(jasperPrint, outputPath);

        return "Report generated successfully. Path: " + outputPath;
    }


}