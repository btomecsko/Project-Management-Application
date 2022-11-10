package com.cooksys.groupproject.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class UserResponseDto {
    private Long id;

    private String username;
    
    private String password;
    
    private String firstName;
    
    private String lastName;
    
    private String email;
    
    private String phone;

    private Boolean Active;

    private Boolean Admin;

    private String status;

    private TeamResponseDto team;

    private CompanyResponseDto company;
}