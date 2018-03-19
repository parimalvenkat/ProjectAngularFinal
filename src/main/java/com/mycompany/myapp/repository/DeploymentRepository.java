package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Deployment;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Deployment entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DeploymentRepository extends JpaRepository<Deployment, Long> {

}
