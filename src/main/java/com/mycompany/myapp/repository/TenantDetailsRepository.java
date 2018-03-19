package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.TenantDetails;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 * Spring Data JPA repository for the TenantDetails entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TenantDetailsRepository extends JpaRepository<TenantDetails, Long> {
    @Query("select distinct tenant_details from TenantDetails tenant_details left join fetch tenant_details.tenantDetailsToStages")
    List<TenantDetails> findAllWithEagerRelationships();

    @Query("select tenant_details from TenantDetails tenant_details left join fetch tenant_details.tenantDetailsToStages where tenant_details.id =:id")
    TenantDetails findOneWithEagerRelationships(@Param("id") Long id);

}
