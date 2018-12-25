package com.example.demo.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Vehicule {
	@Id
	private String idVehicule;
	private String numChassis;
	private String numCarteGrise;
	private String typeImmatriculation;
	private String immatriculation;
	private String marque;
	private String modele;
	private String client;
	public String getNumChassis() {
		return numChassis;
	}
	public void setNumChassis(String numChassis) {
		this.numChassis = numChassis;
	}
	public String getTypeImmatriculation() {
		return typeImmatriculation;
	}
	public void setTypeImmatriculation(String typeImmatriculation) {
		this.typeImmatriculation = typeImmatriculation;
	}
	public String getImmatriculation() {
		return immatriculation;
	}
	public void setImmatriculation(String immatriculation) {
		this.immatriculation = immatriculation;
	}
	public String getMarque() {
		return marque;
	}
	public void setMarque(String marque) {
		this.marque = marque;
	}
	public String getModele() {
		return modele;
	}
	public void setModele(String modele) {
		this.modele = modele;
	}
	
	
	public Vehicule(String numChassis, String numCarteGrise, String typeImmatriculation, String immatriculation, String marque,
			String modele) {
		super();
		this.numChassis = numChassis;
		this.numCarteGrise = numCarteGrise;
		this.typeImmatriculation = typeImmatriculation;
		this.immatriculation = immatriculation;
		this.marque = marque;
		this.modele = modele;
	}
	public Vehicule() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getClient() {
		return client;
	}
	public void setClient(String client) {
		this.client = client;
	}
	
	public String getIdVehicule() {
		return idVehicule;
	}
	public void setIdVehicule(String idVehicule) {
		this.idVehicule = idVehicule;
	}
	public String getNumCarteGrise() {
		return numCarteGrise;
	}
	public void setNumCarteGrise(String numCarteGrise) {
		this.numCarteGrise = numCarteGrise;
	}
	public Vehicule(String numChassis, String numCarteGrise, String typeImmatriculation, String immatriculation, String marque,
			String modele, String client) {
		super();
		this.numChassis = numChassis;
		this.numCarteGrise = numCarteGrise;
		this.typeImmatriculation = typeImmatriculation;
		this.immatriculation = immatriculation;
		this.marque = marque;
		this.modele = modele;
		this.client = client;
	}
	
	
	
	
	
	
}
