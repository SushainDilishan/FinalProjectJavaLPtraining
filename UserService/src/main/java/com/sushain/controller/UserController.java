package com.sushain.controller;

import com.sushain.model.User;
import com.sushain.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/bella")
public class UserController {

  @Autowired
  UserService userService;

  @RequestMapping("/get")
  public List<User> getUsers(){

      return userService.findAllUsers();
  }



}
