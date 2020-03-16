package com.sushain.repository;

import com.sushain.model.ERole;
import com.sushain.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Roles,Integer> {
    Optional<Roles> findByName(ERole name);

}
