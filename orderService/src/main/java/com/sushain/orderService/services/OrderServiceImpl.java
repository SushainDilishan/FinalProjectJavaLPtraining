package com.sushain.orderService.services;

import com.sushain.orderService.model.Order;
import com.sushain.orderService.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
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

//        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        Date date = new Date();

        order.setOrderStatus("Not Ready");
        order.setOrderDate(date);
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
