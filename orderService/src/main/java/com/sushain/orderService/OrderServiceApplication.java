package com.sushain.orderService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import javax.annotation.PostConstruct;
import java.util.TimeZone;


@SpringBootApplication
@EnableDiscoveryClient
public class OrderServiceApplication {

	@PostConstruct
	void setUTCTimezone(){
		TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
	}
	public static void main(String[] args) {
		SpringApplication.run(OrderServiceApplication.class, args);
	}

}
