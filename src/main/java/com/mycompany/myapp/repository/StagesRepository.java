package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Stages;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Stages entity.
 */
@SuppressWarnings("unused")
@Repository
public interface StagesRepository extends JpaRepository<Stages, Long> {

}
