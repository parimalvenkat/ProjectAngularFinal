package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Repositories;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Repositories entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RepositoriesRepository extends JpaRepository<Repositories, Long> {

}
