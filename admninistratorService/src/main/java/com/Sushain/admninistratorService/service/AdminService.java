package com.Sushain.admninistratorService.service;

import com.Sushain.admninistratorService.model.Admin;
import org.springframework.stereotype.Service;

import java.util.List;


public interface AdminService {
    public List<Admin> findAllEmp();
    Admin save(Admin e);
    Admin fetchallEmployees(int id);

}
