package com.sushain.ProductService.model;

import javax.persistence.*;

@Entity
public class Product {

    public Product (String productName,String details,byte[] picByte ){
        this.productName = productName;
        this.details = details;
        this.picByte = picByte;
    }
    @Id
            @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String productName;
    private Double price;
    private String details;
    @Column(name = "picByte", length =100000)
    private byte [] picByte;

    public Product(){

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public byte[] getPicByte() {
        return picByte;
    }

    public void setPicByte(byte[] picByte) {
        this.picByte = picByte;
    }
}
