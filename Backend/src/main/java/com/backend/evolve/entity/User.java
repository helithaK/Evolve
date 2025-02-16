package com.backend.evolve.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data   
@Table(name = "appuser")
public class User {

    @Id
    private int id;

    private String name;
    private String email;
    private String username;
    private String password;
}
