package com.sushain.orderService.repository;

import com.sushain.orderService.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface OrderRepository extends JpaRepository<Order,Integer> {
        public List<Order> findByCustomerName(String s);
}
