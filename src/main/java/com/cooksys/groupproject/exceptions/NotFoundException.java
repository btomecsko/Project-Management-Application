package com.cooksys.groupproject.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class NotFoundException extends RuntimeException{/**
	 * 
	 */
	private static final long serialVersionUID = 6897204507993412307L;
	
	private String message;

}
