package com.backend.evolve.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.evolve.dto.ProductDTO;
import com.backend.evolve.service.ProductService;

@RestController
@RequestMapping(value = "/v1/product")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(value = "/getProduct")
    public List<ProductDTO> getAllProduct() {
        return productService.getAllProducts();
    }
}
