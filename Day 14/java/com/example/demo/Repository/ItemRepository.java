package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {
}