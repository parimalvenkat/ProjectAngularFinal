package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.InboundOutbound;

import com.mycompany.myapp.repository.InboundOutboundRepository;
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
 * REST controller for managing InboundOutbound.
 */
@RestController
@RequestMapping("/api")
public class InboundOutboundResource {

    private final Logger log = LoggerFactory.getLogger(InboundOutboundResource.class);

    private static final String ENTITY_NAME = "inboundOutbound";

    private final InboundOutboundRepository inboundOutboundRepository;

    public InboundOutboundResource(InboundOutboundRepository inboundOutboundRepository) {
        this.inboundOutboundRepository = inboundOutboundRepository;
    }

    /**
     * POST  /inbound-outbounds : Create a new inboundOutbound.
     *
     * @param inboundOutbound the inboundOutbound to create
     * @return the ResponseEntity with status 201 (Created) and with body the new inboundOutbound, or with status 400 (Bad Request) if the inboundOutbound has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/inbound-outbounds")
    @Timed
    public ResponseEntity<InboundOutbound> createInboundOutbound(@RequestBody InboundOutbound inboundOutbound) throws URISyntaxException {
        log.debug("REST request to save InboundOutbound : {}", inboundOutbound);
        if (inboundOutbound.getId() != null) {
            throw new BadRequestAlertException("A new inboundOutbound cannot already have an ID", ENTITY_NAME, "idexists");
        }
        InboundOutbound result = inboundOutboundRepository.save(inboundOutbound);
        return ResponseEntity.created(new URI("/api/inbound-outbounds/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /inbound-outbounds : Updates an existing inboundOutbound.
     *
     * @param inboundOutbound the inboundOutbound to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated inboundOutbound,
     * or with status 400 (Bad Request) if the inboundOutbound is not valid,
     * or with status 500 (Internal Server Error) if the inboundOutbound couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/inbound-outbounds")
    @Timed
    public ResponseEntity<InboundOutbound> updateInboundOutbound(@RequestBody InboundOutbound inboundOutbound) throws URISyntaxException {
        log.debug("REST request to update InboundOutbound : {}", inboundOutbound);
        if (inboundOutbound.getId() == null) {
            return createInboundOutbound(inboundOutbound);
        }
        InboundOutbound result = inboundOutboundRepository.save(inboundOutbound);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, inboundOutbound.getId().toString()))
            .body(result);
    }

    /**
     * GET  /inbound-outbounds : get all the inboundOutbounds.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of inboundOutbounds in body
     */
    @GetMapping("/inbound-outbounds")
    @Timed
    public List<InboundOutbound> getAllInboundOutbounds() {
        log.debug("REST request to get all InboundOutbounds");
        return inboundOutboundRepository.findAll();
        }

    /**
     * GET  /inbound-outbounds/:id : get the "id" inboundOutbound.
     *
     * @param id the id of the inboundOutbound to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the inboundOutbound, or with status 404 (Not Found)
     */
    @GetMapping("/inbound-outbounds/{id}")
    @Timed
    public ResponseEntity<InboundOutbound> getInboundOutbound(@PathVariable Long id) {
        log.debug("REST request to get InboundOutbound : {}", id);
        InboundOutbound inboundOutbound = inboundOutboundRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(inboundOutbound));
    }

    /**
     * DELETE  /inbound-outbounds/:id : delete the "id" inboundOutbound.
     *
     * @param id the id of the inboundOutbound to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/inbound-outbounds/{id}")
    @Timed
    public ResponseEntity<Void> deleteInboundOutbound(@PathVariable Long id) {
        log.debug("REST request to delete InboundOutbound : {}", id);
        inboundOutboundRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
