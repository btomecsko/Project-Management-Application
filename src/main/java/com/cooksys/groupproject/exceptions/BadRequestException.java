package com.cooksys.groupproject.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class BadRequestException extends RuntimeException{
	/**
	 * 
	 */
	private static final long serialVersionUID = 9013867404706733509L;
	
	private String message;
}
