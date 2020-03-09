package com.sushain.controller;

import com.sushain.model.User;
import com.sushain.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
  @PostMapping("/add")
  public void createUser(@RequestBody User user){
    userService.save(user);
  }



}
