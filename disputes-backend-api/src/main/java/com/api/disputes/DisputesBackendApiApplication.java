package com.api.disputes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.disputes.models.Transaction;

import java.util.Date;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
@RestController
public class DisputesBackendApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(DisputesBackendApiApplication.class, args);
	}
	
	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}
	
	@PostMapping("/login")
	public String login(@RequestParam(value = "username", defaultValue="") String username, @RequestParam(value = "password", defaultValue="") String password) {
		return String.format(username, password);
	}
	
	@GetMapping("/transactions")
	public ResponseEntity<List<Transaction>> transactions() {
		Transaction t1 = new Transaction(1, "ATM WITHDRAWAL 4/13", "2019-03-27T10:15:30", 500);
		Transaction t2 = new Transaction(1, "ATM WITHDRAWAL 4/13", "2019-03-27T10:15:30", 500);
		Transaction t3 = new Transaction(1, "ATM WITHDRAWAL 4/13", "2019-03-27T10:15:30", 500);
		
		return ResponseEntity.ok(Arrays.asList(t1,t2,t3));
	}
}
