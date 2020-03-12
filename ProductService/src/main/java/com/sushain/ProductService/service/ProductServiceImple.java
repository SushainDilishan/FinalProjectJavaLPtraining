package com.sushain.ProductService.service;

import com.sushain.ProductService.model.Product;
import com.sushain.ProductService.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImple implements ProductService {

    @Autowired
    ProductRepository productRepository;

    @Override
    public List<Product> getProducts() {

        return productRepository.findAll();

    }

    @Override
    public Product save(Product product) {
        Product product1 = productRepository.save(product);
        return product1;
    }

    @Override
    public Product delete(Integer id) {
        Product product = productRepository.getOne(id);
        productRepository.deleteById(id);
        return product;
    }


}
