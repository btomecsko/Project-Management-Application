package com.cooksys.groupproject.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cooksys.groupproject.entities.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
	
	Optional<Project> findById(Long id);
	
	List<Project> findAll();

}
