package com.Sushain.admninistratorService.controller;

import com.Sushain.admninistratorService.model.Admin;
import com.Sushain.admninistratorService.repository.AdminRepository;
import com.Sushain.admninistratorService.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Admin")
public class AdminController {

    @Autowired
    AdminService adminService;

    @RequestMapping(value = "/Admins")
    public List<Admin> getAllAdmins(){
        return adminService.findAllEmp();
    }

    @Transactional
    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public Admin getEmployees(@RequestBody Admin e){
        Admin admin = adminService.save(e);
        return admin;
    }




}
