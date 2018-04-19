package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.VersionManagement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * Spring Data JPA repository for the VersionManagement entity.
 */
@SuppressWarnings("unused")
@Repository
public interface VersionManagementRepository extends JpaRepository<VersionManagement, Long> {

}
