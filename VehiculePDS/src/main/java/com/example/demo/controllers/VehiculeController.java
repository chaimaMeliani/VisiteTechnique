package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.VehiculeRepository;
import com.example.demo.entities.Vehicule;

@RestController
public class VehiculeController {
	@Autowired
	private VehiculeRepository vehiculerepository;
	

	@RequestMapping("/save")
	public Vehicule savevehicule(Vehicule v)
	{
		vehiculerepository.save(v);
		return v;
	}
	
	@RequestMapping("/all")
	public List<Vehicule> getvehicules(){
		
		return vehiculerepository.findAll();
	}
	
	@RequestMapping("/get")
    public Vehicule getvehicule(Long numChassis)
    {
		return vehiculerepository.findById(numChassis).orElse(null);
		
    }
	
	@RequestMapping("/delete")
   public void  delete(Long numChassis )
   {
		vehiculerepository.deleteById(numChassis);
   }
	
}
