package com.example.demo.entities;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Client {
@Id
private String idClient;
private String firstName ;
private String lastName ;
private String cin ;
private String permis;
private String userName;
private String password;
private List<Reservation> reslist;
private List<Vehicule> vehiculeslist;
public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
public String getCin() {
	return cin;
}
public void setCin(String cin) {
	this.cin = cin;
}
public String getPermis() {
	return permis;
}
public void setPermis(String permis) {
	this.permis = permis;
}
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}

public String getIdClient() {
	return idClient;
}
public void setIdClient(String idClient) {
	this.idClient = idClient;
}
public Client() {
	super();
	// TODO Auto-generated constructor stub
}
public List<Reservation> getReslist() {
	return reslist;
}
public void setReslist(List<Reservation> reslist) {
	this.reslist = reslist;
}
public Client(String idClient, String firstName) {
	super();
	this.idClient = idClient;
	this.firstName = firstName;
}
public List<Vehicule> getVehiculeslist() {
	return vehiculeslist;
}
public void setVehiculeslist(List<Vehicule> vehiculeslist) {
	this.vehiculeslist = vehiculeslist;
}
	
	
	
	
}
