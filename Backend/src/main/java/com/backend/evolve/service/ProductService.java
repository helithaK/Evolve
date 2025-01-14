package com.backend.evolve.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.backend.evolve.dto.ProductDTO;
import com.backend.evolve.entity.Product;
import com.backend.evolve.repo.ProductRepo;

@Service
@Transactional
public class ProductService {
    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private ModelMapper modelMapper;

    // Method to convert Product to ProductDTO
    private ProductDTO convertToDTO(Product product) {
        return modelMapper.map(product, ProductDTO.class);
    }

    public List<ProductDTO> getAllProducts() {
        return productRepo
            .getAllProducts()
            .stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
}
