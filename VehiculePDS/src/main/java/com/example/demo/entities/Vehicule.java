package com.example.demo.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Vehicule {
	@Id
	private Long numChassis;
	private String numCateGrise;
	private String typeImm;
	private String immatriculation;
	private String marque;
	private String modele;
	private String client;
	public Long getNumChassis() {
		return numChassis;
	}
	public void setNumChassis(Long numChassis) {
		this.numChassis = numChassis;
	}
	public String getNumCateGrise() {
		return numCateGrise;
	}
	public void setNumCateGrise(String numCateGrise) {
		this.numCateGrise = numCateGrise;
	}
	public String getTypeImm() {
		return typeImm;
	}
	public void setTypeImm(String typeImm) {
		this.typeImm = typeImm;
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
	public Vehicule(Long numChassis, String numCateGrise, String typeImm, String immatriculation, String marque,
			String modele) {
		super();
		this.numChassis = numChassis;
		this.numCateGrise = numCateGrise;
		this.typeImm = typeImm;
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
	public Vehicule(Long numChassis, String numCateGrise, String typeImm, String immatriculation, String marque,
			String modele, String client) {
		super();
		this.numChassis = numChassis;
		this.numCateGrise = numCateGrise;
		this.typeImm = typeImm;
		this.immatriculation = immatriculation;
		this.marque = marque;
		this.modele = modele;
		this.client = client;
	}
	
	
	
	
	
	
}
