package com.sushain.orderService.services;

import com.sushain.orderService.model.Order;

import java.util.List;

public interface OrderService {

    public List<Order> findAllOrders();
}
