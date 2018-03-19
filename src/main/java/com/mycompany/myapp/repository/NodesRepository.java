package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Nodes;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Nodes entity.
 */
@SuppressWarnings("unused")
@Repository
public interface NodesRepository extends JpaRepository<Nodes, Long> {

}
