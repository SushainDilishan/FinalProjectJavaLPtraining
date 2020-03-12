package com.sushain.ProductService.service;

import com.sushain.ProductService.model.Product;

import java.util.List;

public interface ProductService {

    public List<Product> getProducts();
    Product save(Product product);
    public Product delete(Integer id);
}
