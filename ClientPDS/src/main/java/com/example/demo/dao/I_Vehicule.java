package com.example.demo.dao;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.demo.entities.Vehicule;
@FeignClient("VehiculePDS")
public interface I_Vehicule {
	@RequestMapping(method = RequestMethod.GET, value = "/getByClient/{id}")
    List<Vehicule> GetVehicules(@PathVariable("id") String id);
}
