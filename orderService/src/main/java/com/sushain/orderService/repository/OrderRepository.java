package com.sushain.orderService.repository;

import com.sushain.orderService.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;



public interface OrderRepository extends JpaRepository<Order,Integer> {
}
