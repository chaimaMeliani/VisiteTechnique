package com.example.demo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.example.demo.entities.Vehicule;

public interface VehiculeRepository extends MongoRepository<Vehicule, String>{
	List<Vehicule> findByClient(String id);
	Vehicule findByIdVehicule(String id);
}
