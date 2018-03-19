package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Application;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 * Spring Data JPA repository for the Application entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {
    @Query("select distinct application from Application application left join fetch application.applicationToImages left join fetch application.applicationToInOutbounds")
    List<Application> findAllWithEagerRelationships();

    @Query("select application from Application application left join fetch application.applicationToImages left join fetch application.applicationToInOutbounds where application.id =:id")
    Application findOneWithEagerRelationships(@Param("id") Long id);

}
