package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.TenantContactDetails;

import com.mycompany.myapp.repository.TenantContactDetailsRepository;
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
 * REST controller for managing TenantContactDetails.
 */
@RestController
@RequestMapping("/api")
public class TenantContactDetailsResource {

    private final Logger log = LoggerFactory.getLogger(TenantContactDetailsResource.class);

    private static final String ENTITY_NAME = "tenantContactDetails";

    private final TenantContactDetailsRepository tenantContactDetailsRepository;

    public TenantContactDetailsResource(TenantContactDetailsRepository tenantContactDetailsRepository) {
        this.tenantContactDetailsRepository = tenantContactDetailsRepository;
    }

    /**
     * POST  /tenant-contact-details : Create a new tenantContactDetails.
     *
     * @param tenantContactDetails the tenantContactDetails to create
     * @return the ResponseEntity with status 201 (Created) and with body the new tenantContactDetails, or with status 400 (Bad Request) if the tenantContactDetails has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/tenant-contact-details")
    @Timed
    public ResponseEntity<TenantContactDetails> createTenantContactDetails(@RequestBody TenantContactDetails tenantContactDetails) throws URISyntaxException {
        log.debug("REST request to save TenantContactDetails : {}", tenantContactDetails);
        if (tenantContactDetails.getId() != null) {
            throw new BadRequestAlertException("A new tenantContactDetails cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TenantContactDetails result = tenantContactDetailsRepository.save(tenantContactDetails);
        return ResponseEntity.created(new URI("/api/tenant-contact-details/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /tenant-contact-details : Updates an existing tenantContactDetails.
     *
     * @param tenantContactDetails the tenantContactDetails to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated tenantContactDetails,
     * or with status 400 (Bad Request) if the tenantContactDetails is not valid,
     * or with status 500 (Internal Server Error) if the tenantContactDetails couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/tenant-contact-details")
    @Timed
    public ResponseEntity<TenantContactDetails> updateTenantContactDetails(@RequestBody TenantContactDetails tenantContactDetails) throws URISyntaxException {
        log.debug("REST request to update TenantContactDetails : {}", tenantContactDetails);
        if (tenantContactDetails.getId() == null) {
            return createTenantContactDetails(tenantContactDetails);
        }
        TenantContactDetails result = tenantContactDetailsRepository.save(tenantContactDetails);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, tenantContactDetails.getId().toString()))
            .body(result);
    }

    /**
     * GET  /tenant-contact-details : get all the tenantContactDetails.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of tenantContactDetails in body
     */
    @GetMapping("/tenant-contact-details")
    @Timed
    public List<TenantContactDetails> getAllTenantContactDetails() {
        log.debug("REST request to get all TenantContactDetails");
        return tenantContactDetailsRepository.findAll();
        }

    /**
     * GET  /tenant-contact-details/:id : get the "id" tenantContactDetails.
     *
     * @param id the id of the tenantContactDetails to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the tenantContactDetails, or with status 404 (Not Found)
     */
    @GetMapping("/tenant-contact-details/{id}")
    @Timed
    public ResponseEntity<TenantContactDetails> getTenantContactDetails(@PathVariable Long id) {
        log.debug("REST request to get TenantContactDetails : {}", id);
        TenantContactDetails tenantContactDetails = tenantContactDetailsRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(tenantContactDetails));
    }

    /**
     * DELETE  /tenant-contact-details/:id : delete the "id" tenantContactDetails.
     *
     * @param id the id of the tenantContactDetails to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/tenant-contact-details/{id}")
    @Timed
    public ResponseEntity<Void> deleteTenantContactDetails(@PathVariable Long id) {
        log.debug("REST request to delete TenantContactDetails : {}", id);
        tenantContactDetailsRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
