package com.example.demo.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.example.demo.entities.Reservation;



public interface ReservationRepository extends MongoRepository<Reservation, String> {
	List<Reservation> findByClient(String id);
}
