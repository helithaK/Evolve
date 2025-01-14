package com.backend.evolve.dto;

import java.util.List;
import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductDTO {
    private UUID id;
    private String title;
    private String shop_name;
    private String price;
    private boolean availability;
    private String description;
    private String link;
    private List<String> sizes;
    private List<String> images;
}
