package com.Sushain.admninistratorService.controller;

import com.Sushain.admninistratorService.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Cake")
public class AdminController {

    @Autowired
    AdminRepository adminRepository;


}
