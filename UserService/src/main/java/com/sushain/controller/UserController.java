package com.sushain.controller;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sushain.model.Roles;
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

  @GetMapping(produces = "application/json")
  @RequestMapping({"/validate"})
  public Roles validate(){
    return  new Roles("Success");
  }
  @PostMapping("/add")
  public void createUser(@RequestBody User user){
    userService.save(user);
  }

  @DeleteMapping(path = { "/{id}" })
  public void deleteUser(@PathVariable("id") Integer id){

    userService.deleteUser(id);

  }

}
