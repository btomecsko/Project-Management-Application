package com.cooksys.groupproject.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cooksys.groupproject.entities.Team;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long>{
	
	Optional<Team> findById(Long id);
	
	List<Team>findAll();

}
