package com.sushain.orderService.controller;

import com.sushain.orderService.model.Order;
import com.sushain.orderService.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/save")
    public void saveOrder(@RequestBody Order order){
        orderService.save(order);
    }

    @PutMapping("/update")
    public void updateProduct(@RequestBody Order order){
        orderService.save(order);
    }

    @DeleteMapping(path = { "/{id}" })
    public void deleteProduct(@PathVariable("id") Integer id){
        orderService.delete(id);
    }

    @RequestMapping("/{name}")
    public List<Order> findOrder(@PathVariable("name") String name){
       return orderService.findByName(name);
    }




}
