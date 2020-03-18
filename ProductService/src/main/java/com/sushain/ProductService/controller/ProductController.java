package com.sushain.ProductService.controller;

import com.sushain.ProductService.model.Product;
import com.sushain.ProductService.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

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

    @PostMapping("/save")
    public void createProduct(@RequestBody Product product){
        product.setPicByte(this.bytes);
        productService.save(product);
        this.bytes = null;
    }

    @PutMapping("/update")
    public void updateBook(@RequestBody Product product){
        productService.save(product);
    }

    @DeleteMapping(path = { "/{id}" })
    public void deleteProduct(@PathVariable("id") Integer id){
        productService.delete(id);
    }

//    public static byte[] compressBytes(byte[] data) {
//
//        Deflater deflater = new Deflater();
//        deflater.setInput(data);
//        deflater.finish();
//
//        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
//        byte[] buffer = new byte[1024];
//
//        while (!deflater.finished()) {
//
//            int count = deflater.deflate(buffer);
//            outputStream.write(buffer, 0, count);
//        }
//        try {
//            outputStream.close();
//        } catch (IOException e) {
//
//        }
//        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
//        return outputStream.toByteArray();
//    }
//
//    public static byte[] decompressBytes(byte[] data) {
//
//        Inflater inflater = new Inflater();
//
//        inflater.setInput(data);
//        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
//        byte[] buffer = new byte[1024];
//
//        try {
//
//            while (!inflater.finished()) {
//
//                int count = inflater.inflate(buffer);
//                outputStream.write(buffer, 0, count);
//            }
//            outputStream.close();
//
//        } catch (IOException ioe) {
//        } catch (DataFormatException e) {
//        }
//        return outputStream.toByteArray();
//    }
}
