package com.Sushain.admninistratorService.repository;

import com.Sushain.admninistratorService.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

    Optional<Object> findByUserName(String username);
}
