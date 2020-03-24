package com.sushain.orderService.services;

import com.sushain.orderService.model.Order;

import java.util.List;

public interface OrderService {

    public List<Order> findAllOrders();
    public Order save(Order order);
    public Order delete(Integer id);

}
