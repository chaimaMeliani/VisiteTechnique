package com.example.demo.dao;

import java.util.List;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;





@FeignClient(value="ReservationPDS")
@RibbonClient(name="ReservationPDS")
public interface I_Reservation {
	@RequestMapping(method = RequestMethod.GET, value = "/reserv/{id}")
    List<Object> GetReservation(@PathVariable("id") String id);
}
