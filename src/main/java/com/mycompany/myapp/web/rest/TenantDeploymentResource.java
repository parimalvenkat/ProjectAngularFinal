package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.TenantDeployment;

import com.mycompany.myapp.repository.TenantDeploymentRepository;
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
 * REST controller for managing TenantDeployment.
 */
@RestController
@RequestMapping("/api")
public class TenantDeploymentResource {

    private final Logger log = LoggerFactory.getLogger(TenantDeploymentResource.class);

    private static final String ENTITY_NAME = "tenantDeployment";

    private final TenantDeploymentRepository tenantDeploymentRepository;

    public TenantDeploymentResource(TenantDeploymentRepository tenantDeploymentRepository) {
        this.tenantDeploymentRepository = tenantDeploymentRepository;
    }

    /**
     * POST  /tenant-deployments : Create a new tenantDeployment.
     *
     * @param tenantDeployment the tenantDeployment to create
     * @return the ResponseEntity with status 201 (Created) and with body the new tenantDeployment, or with status 400 (Bad Request) if the tenantDeployment has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/tenant-deployments")
    @Timed
    public ResponseEntity<TenantDeployment> createTenantDeployment(@RequestBody TenantDeployment tenantDeployment) throws URISyntaxException {
        log.debug("REST request to save TenantDeployment : {}", tenantDeployment);
        if (tenantDeployment.getId() != null) {
            throw new BadRequestAlertException("A new tenantDeployment cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TenantDeployment result = tenantDeploymentRepository.save(tenantDeployment);
        return ResponseEntity.created(new URI("/api/tenant-deployments/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /tenant-deployments : Updates an existing tenantDeployment.
     *
     * @param tenantDeployment the tenantDeployment to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated tenantDeployment,
     * or with status 400 (Bad Request) if the tenantDeployment is not valid,
     * or with status 500 (Internal Server Error) if the tenantDeployment couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/tenant-deployments")
    @Timed
    public ResponseEntity<TenantDeployment> updateTenantDeployment(@RequestBody TenantDeployment tenantDeployment) throws URISyntaxException {
        log.debug("REST request to update TenantDeployment : {}", tenantDeployment);
        if (tenantDeployment.getId() == null) {
            return createTenantDeployment(tenantDeployment);
        }
        TenantDeployment result = tenantDeploymentRepository.save(tenantDeployment);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, tenantDeployment.getId().toString()))
            .body(result);
    }

    /**
     * GET  /tenant-deployments : get all the tenantDeployments.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of tenantDeployments in body
     */
    @GetMapping("/tenant-deployments")
    @Timed
    public List<TenantDeployment> getAllTenantDeployments() {
        log.debug("REST request to get all TenantDeployments");
        return tenantDeploymentRepository.findAll();
        }

    /**
     * GET  /tenant-deployments/:id : get the "id" tenantDeployment.
     *
     * @param id the id of the tenantDeployment to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the tenantDeployment, or with status 404 (Not Found)
     */
    @GetMapping("/tenant-deployments/{id}")
    @Timed
    public ResponseEntity<TenantDeployment> getTenantDeployment(@PathVariable Long id) {
        log.debug("REST request to get TenantDeployment : {}", id);
        TenantDeployment tenantDeployment = tenantDeploymentRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(tenantDeployment));
    }

    /**
     * DELETE  /tenant-deployments/:id : delete the "id" tenantDeployment.
     *
     * @param id the id of the tenantDeployment to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/tenant-deployments/{id}")
    @Timed
    public ResponseEntity<Void> deleteTenantDeployment(@PathVariable Long id) {
        log.debug("REST request to delete TenantDeployment : {}", id);
        tenantDeploymentRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
