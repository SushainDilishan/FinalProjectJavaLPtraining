package com.sushain.orderService.services;

import com.sushain.orderService.model.Order;
import com.sushain.orderService.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    OrderRepository orderRepository;

    @Override
    public List<Order> findAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order save(Order order) {

        order.setOrderStatus("Not Ready");
        Order order1 = orderRepository.save(order);
        return order1;
    }

    @Override
    public Order delete(Integer id) {
        Order order = orderRepository.getOne(id);
        orderRepository.deleteById(id);
        return order;
    }
}
