package com.backend.evolve.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class ProductResponseDTO {
    List<ProductDTO> products;
    int totalProducts;
}
