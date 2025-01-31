package com.backend.evolve.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.evolve.dto.ProductResponseDTO;
import com.backend.evolve.service.ProductService;

@RestController
@RequestMapping(value = "/v1/product")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(value = "/getProduct")
    public ProductResponseDTO getProducts(
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false) Integer limit) {
        if (page != null && limit != null) {
            return new ProductResponseDTO(productService.getProductsPerPage(page, limit),
                    productService.getTotalProductCount());

        } else {
            return new ProductResponseDTO(productService.getAllProducts(),
            productService.getTotalProductCount());
        }
    }
}
