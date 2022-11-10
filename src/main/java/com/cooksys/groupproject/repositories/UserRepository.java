package com.cooksys.groupproject.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cooksys.groupproject.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    
    Optional<User> findById(Long id);
    
    List<User>findAll();

    Optional<User> findByCredentials(String username);
}
