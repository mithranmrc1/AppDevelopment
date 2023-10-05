package com.example.demo.Repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.UserRegisterEntity;



public interface UserRegisterRepository extends JpaRepository<UserRegisterEntity, Integer>{

}