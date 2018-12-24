package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.com.I_Reservation;
import com.example.demo.dao.ClientRepository;
import com.example.demo.entities.Client;
import com.example.demo.entities.Reservation;

@CrossOrigin(origins = { "http://localhost:4200" })
@RestController
public class ClientController {
	@Autowired
	private ClientRepository clientrepo;

	
	  
		@Autowired
	private I_Reservation lc;
		
	
	
	
	@RequestMapping("/save")
	public Client saveclient(Client c) {
		clientrepo.save(c);
		return c;
	}

	@RequestMapping("/all")
	public List<Client> getclients() {

		return clientrepo.findAll();
	}

	@RequestMapping("/Clientpds")
	public Optional<Client> getById(String id){		

		Optional<Client> cmd= clientrepo.findById(id);
		List<Reservation> lgnes=lc.GetReservation(id);
		cmd.get().setReslist(lgnes);
		return cmd;
	}
	
	
	@RequestMapping("/liste")
	public List<String> getcode(){		

		List<Client> cmd= clientrepo.findAll();
		
		List<String> array=new ArrayList<String>();
		for (Client info : cmd) {
			array.add(info.getIdClient());
		}
		return array;

	}
	
}
