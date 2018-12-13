package com.example.demo.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.entities.Client;

public interface ClientRepository  extends MongoRepository<Client,String> {

}
