package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.TenantDeployment;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the TenantDeployment entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TenantDeploymentRepository extends JpaRepository<TenantDeployment, Long> {

}
