package com.example.demo.entities;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Reservation {

	@Id
	private String id;
	private Date dateReservation;
	private String emplacement;
	private String client;
	private String vehicule;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public Date getDateReservation() {
		return dateReservation;
	}
	public void setDateReservation(Date dateReservation) {
		this.dateReservation = dateReservation;
	}

	public String getClient() {
		return client;
	}
	public void setClient(String client) {
		this.client = client;
	}
	public String getVehicule() {
		return vehicule;
	}
	public void setVehicule(String vehicule) {
		this.vehicule = vehicule;
	}
	
	public String getEmplacement() {
		return emplacement;
	}
	public void setEmplacement(String emplacement) {
		this.emplacement = emplacement;
	}
	public Reservation(String id_res, Date date_res, String client, String vehicule) {
		super();
		this.id = id_res;
		this.dateReservation = date_res;
		this.client = client;
		this.vehicule = vehicule;
	}
	
	public Reservation(Date date_res, String client, String vehicule) {
		super();
		this.dateReservation = date_res;
		this.client = client;
		this.vehicule = vehicule;
	}
	public Reservation() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
}
