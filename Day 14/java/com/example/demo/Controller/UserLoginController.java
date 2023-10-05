package com.example.demo.Controller;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.UserLoginEntity;
import com.example.demo.Service.UserLoginService;




@RestController
public class UserLoginController {
  @Autowired
  private UserLoginService userLoginService;
  @GetMapping("/getUserLogin")
  public List<UserLoginEntity> getUserLogin(){
    return userLoginService.getUserLogin();
  }
  @GetMapping("/getUserLogin/{id}")
  public Optional<UserLoginEntity> getUserLoginbyId(@PathVariable int id){
    return userLoginService.getUserLoginbyId(id);
  }

  @PostMapping("/postUserLogin")
  public void postUserLogin(@RequestBody UserLoginEntity ule)
  {
    userLoginService.postUserLogin(ule);
  }

}