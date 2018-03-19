package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.TenantDetails;

import com.mycompany.myapp.repository.TenantDetailsRepository;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;
import com.mycompany.myapp.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing TenantDetails.
 */
@RestController
@RequestMapping("/api")
public class TenantDetailsResource {

    private final Logger log = LoggerFactory.getLogger(TenantDetailsResource.class);

    private static final String ENTITY_NAME = "tenantDetails";

    private final TenantDetailsRepository tenantDetailsRepository;

    public TenantDetailsResource(TenantDetailsRepository tenantDetailsRepository) {
        this.tenantDetailsRepository = tenantDetailsRepository;
    }

    /**
     * POST  /tenant-details : Create a new tenantDetails.
     *
     * @param tenantDetails the tenantDetails to create
     * @return the ResponseEntity with status 201 (Created) and with body the new tenantDetails, or with status 400 (Bad Request) if the tenantDetails has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/tenant-details")
    @Timed
    public ResponseEntity<TenantDetails> createTenantDetails(@RequestBody TenantDetails tenantDetails) throws URISyntaxException {
        log.debug("REST request to save TenantDetails : {}", tenantDetails);
        if (tenantDetails.getId() != null) {
            throw new BadRequestAlertException("A new tenantDetails cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TenantDetails result = tenantDetailsRepository.save(tenantDetails);
        return ResponseEntity.created(new URI("/api/tenant-details/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /tenant-details : Updates an existing tenantDetails.
     *
     * @param tenantDetails the tenantDetails to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated tenantDetails,
     * or with status 400 (Bad Request) if the tenantDetails is not valid,
     * or with status 500 (Internal Server Error) if the tenantDetails couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/tenant-details")
    @Timed
    public ResponseEntity<TenantDetails> updateTenantDetails(@RequestBody TenantDetails tenantDetails) throws URISyntaxException {
        log.debug("REST request to update TenantDetails : {}", tenantDetails);
        if (tenantDetails.getId() == null) {
            return createTenantDetails(tenantDetails);
        }
        TenantDetails result = tenantDetailsRepository.save(tenantDetails);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, tenantDetails.getId().toString()))
            .body(result);
    }

    /**
     * GET  /tenant-details : get all the tenantDetails.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of tenantDetails in body
     */
    @GetMapping("/tenant-details")
    @Timed
    public List<TenantDetails> getAllTenantDetails() {
        log.debug("REST request to get all TenantDetails");
        return tenantDetailsRepository.findAllWithEagerRelationships();
        }

    /**
     * GET  /tenant-details/:id : get the "id" tenantDetails.
     *
     * @param id the id of the tenantDetails to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the tenantDetails, or with status 404 (Not Found)
     */
    @GetMapping("/tenant-details/{id}")
    @Timed
    public ResponseEntity<TenantDetails> getTenantDetails(@PathVariable Long id) {
        log.debug("REST request to get TenantDetails : {}", id);
        TenantDetails tenantDetails = tenantDetailsRepository.findOneWithEagerRelationships(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(tenantDetails));
    }

    /**
     * DELETE  /tenant-details/:id : delete the "id" tenantDetails.
     *
     * @param id the id of the tenantDetails to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/tenant-details/{id}")
    @Timed
    public ResponseEntity<Void> deleteTenantDetails(@PathVariable Long id) {
        log.debug("REST request to delete TenantDetails : {}", id);
        tenantDetailsRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
