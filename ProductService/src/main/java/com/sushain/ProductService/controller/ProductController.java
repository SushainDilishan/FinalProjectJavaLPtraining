package com.sushain.ProductService.controller;

import com.sushain.ProductService.model.Product;
import com.sushain.ProductService.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/products")
public class ProductController {

    private byte[] bytes;

    @Autowired
    ProductService productService;

    @RequestMapping("/get")
    public List<Product> getProducts(){

        return productService.getProducts();
    }

    @PostMapping("/upload")
    public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        this.bytes = file.getBytes();
    }

    @RequestMapping("/save")
    public void createProduct(@RequestBody Product product){
        product.setPicByte(this.bytes);
        productService.save(product);
        this.bytes = null;
    }

    @DeleteMapping("/{id")
    public Product deleteProduct(@PathVariable("id") Integer id){
        return productService.delete(id);
    }
}
