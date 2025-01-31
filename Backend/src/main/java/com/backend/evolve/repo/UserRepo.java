package com.backend.evolve.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.evolve.entity.User;

public interface UserRepo extends JpaRepository<User, Integer>{
    
}
