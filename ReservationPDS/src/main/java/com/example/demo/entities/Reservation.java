package com.example.demo.entities;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Reservation {

	@Id
	private String Id_res;
	private Date date_res;
	private String etat;
	private String emplacement;
	private String client;
	private String vehicule;
	public String getId_res() {
		return Id_res;
	}
	public void setId_res(String id_res) {
		Id_res = id_res;
	}
	public Date getDate_res() {
		return date_res;
	}
	public void setDate_res(Date date_res) {
		this.date_res = date_res;
	}
	public String getEtat() {
		return etat;
	}
	public void setEtat(String etat) {
		this.etat = etat;
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
	public Reservation(String id_res, Date date_res, String etat, String client, String vehicule) {
		super();
		Id_res = id_res;
		this.date_res = date_res;
		this.etat = etat;
		this.client = client;
		this.vehicule = vehicule;
	}
	public Reservation() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Reservation(Date date_res, String etat, String client, String vehicule) {
		super();
		this.date_res = date_res;
		this.etat = etat;
		this.client = client;
		this.vehicule = vehicule;
	}
	
	
	
	
}
