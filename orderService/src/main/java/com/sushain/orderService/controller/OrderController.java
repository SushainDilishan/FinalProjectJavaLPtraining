package com.sushain.orderService.controller;

import com.sushain.orderService.model.Order;
import com.sushain.orderService.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/order")
public class OrderController {

    @Autowired
    OrderService orderService;

    @RequestMapping("/get")
    public List<Order> findAll(){
        return orderService.findAllOrders();
    }

}
