package com.mycompany.myapp.repository;

import  com.mycompany.myapp.domain.ScaleManagement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * Spring Data JPA repository for the ScaleManagement entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ScaleManagementRepository extends JpaRepository<ScaleManagement , Long> {

}
