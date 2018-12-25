package com.example.demo.dao;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.entities.Client;

public interface ClientRepository  extends MongoRepository<Client,String> {
	Client findByUserNameAndPassword(String userName,String password);
	Optional<Client> findByIdClient(String id);

}
