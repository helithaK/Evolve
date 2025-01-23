package com.backend.evolve.repo;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.backend.evolve.entity.Product;

public interface ProductRepo extends JpaRepository<Product, UUID> {
    @Query("SELECT p FROM Product p")
    List<Product> getAllProducts();

    @Query(value = "SELECT * FROM product LIMIT :limit OFFSET :offset", nativeQuery = true)
    List<Product> getProductsPerPage(@Param("limit") int limit, @Param("offset") int offset);

    @Query(value = "SELECT COUNT(id) FROM product", nativeQuery = true)
    int getTotalProductCount();
}
