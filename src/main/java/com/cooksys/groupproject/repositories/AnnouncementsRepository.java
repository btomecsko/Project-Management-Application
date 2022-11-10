package com.cooksys.groupproject.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cooksys.groupproject.entities.Announcements;

@Repository
public interface AnnouncementsRepository extends JpaRepository<Announcements, Long> {
	
	Optional<Announcements> findById(Long id);
	
	List<Announcements> findAll();
}
