package com.Sushain.admninistratorService.service;

import com.Sushain.admninistratorService.model.Admin;
import com.Sushain.admninistratorService.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    AdminRepository adminRepository;

    @Override
    public List<Admin> findAllEmp() {

        return adminRepository.findAll();
    }

    @Override
    public Admin save(Admin e) {
        Admin admin = adminRepository.save(e);
        return admin;
    }

    @Override
    public Admin fetchallEmployees(int id) {
        return null;
    }
}
