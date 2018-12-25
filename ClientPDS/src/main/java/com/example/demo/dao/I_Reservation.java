package com.example.demo.dao;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.demo.entities.Reservation;



@FeignClient("ReservationPDS")
public interface I_Reservation {
	@RequestMapping(method = RequestMethod.GET, value = "/reserv/{id}")
    List<Reservation> GetReservation(@PathVariable("id") String id);
}
