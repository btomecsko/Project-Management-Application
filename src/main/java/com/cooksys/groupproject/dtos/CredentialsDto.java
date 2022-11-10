package com.cooksys.groupproject.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CredentialsDto {
    @Column(nullable = false)
    private String username;
    @Column(nullable = false)
    private String password;
}