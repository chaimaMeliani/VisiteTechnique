package com.example.demo.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.example.demo.entities.Reservation;



public interface ReservationRepository extends MongoRepository<Reservation, String> {
	List<Reservation> findByClient(String id);
	List<Reservation> findByDateReservationAndEmplacement(Date date,String emp);
	List<Reservation> findByClientAndDateReservationLessThan(String id,Date date);
	List<Reservation> findByClientAndDateReservationGreaterThan(String id,Date date);
	
}
