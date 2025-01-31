package com.backend.evolve;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EvolveApplication {

	public static void main(String[] args) {
		SpringApplication.run(EvolveApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper() {
		return  new ModelMapper();
	}

}
