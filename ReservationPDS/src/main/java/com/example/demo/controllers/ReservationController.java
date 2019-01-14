package com.example.demo.controllers;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.ReservationRepository;
import com.example.demo.entities.Reservation;

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
	@RequestMapping("/reserationExiste")
	public boolean findByDateReservationAndEmplacement(Date date,String emp) {

		return (reservationrepo.findByDateReservationAndEmplacement(date,emp).size()==0)?false:true;
	}
	@RequestMapping("/ByYear")
	public List<Reservation> findByDateReservation_Year(int year) {

		return reservationrepo.findByDateReservation_Year( year);
	}
	@RequestMapping("/statistique")
	public Map<String, Integer> findByDateReservationLessThan(String id) {
		HashMap<String, Integer> map = new HashMap<>();
	    map.put("fini", reservationrepo.findByClientAndDateReservationLessThan(id,new Date()).size());
	    map.put("enCours", reservationrepo.findByClientAndDateReservationGreaterThan(id,new Date()).size());
	    
	    return map;
		
	}
	@RequestMapping("/allreservations")
	public List<Reservation> allreservations() {

		return reservationrepo.findAll();

	}

}
