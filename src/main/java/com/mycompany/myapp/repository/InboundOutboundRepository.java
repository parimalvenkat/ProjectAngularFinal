package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.InboundOutbound;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the InboundOutbound entity.
 */
@SuppressWarnings("unused")
@Repository
public interface InboundOutboundRepository extends JpaRepository<InboundOutbound, Long> {

}
