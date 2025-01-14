package com.backend.evolve.repo;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.backend.evolve.entity.Product;

public interface ProductRepo extends JpaRepository<Product, UUID>{
    @Query("SELECT p FROM Product p")
    List<Product> getAllProducts();
}
