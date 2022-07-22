package com.api.disputes.models;

import java.time.LocalDateTime;

public class Transaction {
	private final long id;
	private final String description;
	private final String posted_date;
	private final Integer charge;
	
	public Transaction(long id, String description, String posted_date, Integer charge) {
		this.id = id;
		this.description = description;
		this.posted_date = LocalDateTime.parse(posted_date).toString();
		this.charge = charge;
	}
	
	public long getId() {
		return id;
	}
	
	public String getDescription() {
		return description;
	}
	
	public String getPostedDate() {
		return posted_date;
	}
	
	public Integer getCharge() {
		return charge;
	}
}
	