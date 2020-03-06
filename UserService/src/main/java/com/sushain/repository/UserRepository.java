package com.sushain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sushain.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	User findByUsernameAndPassword(String username,String password);
}
