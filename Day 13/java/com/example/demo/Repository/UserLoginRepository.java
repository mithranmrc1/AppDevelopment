package com.example.demo.Repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.UserLoginEntity;


public interface UserLoginRepository extends JpaRepository<UserLoginEntity, Integer>{

}