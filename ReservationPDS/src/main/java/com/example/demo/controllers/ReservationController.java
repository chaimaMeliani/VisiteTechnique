package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.ReservationRepository;
import com.example.demo.entities.Reservation;
@CrossOrigin(origins = { "http://localhost:4200" })
@RestController
public class ReservationController {
	@Autowired
	private ReservationRepository reservationrepo;

	@RequestMapping("/savereservation")
	public Reservation savereservation(Reservation r) {

		reservationrepo.save(r);
		return r;
	}

	@GetMapping("/reserv/{id}")
	public List<Reservation> getByClient(@PathVariable("id") String d) {

		List<Reservation> Lres = this.reservationrepo.findByClient(d);
		return Lres;

	}

	@RequestMapping("/allreservations")
	public List<Reservation> allreservations() {

		return reservationrepo.findAll();

	}

}
