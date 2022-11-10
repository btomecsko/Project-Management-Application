package com.cooksys.groupproject.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cooksys.groupproject.entities.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
	
	Optional<Company> findById(Long id);
	
	List<Company> findAll();

}
