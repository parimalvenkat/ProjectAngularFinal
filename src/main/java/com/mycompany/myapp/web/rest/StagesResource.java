package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Stages;

import com.mycompany.myapp.repository.StagesRepository;
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
 * REST controller for managing Stages.
 */
@RestController
@RequestMapping("/api")
public class StagesResource {

    private final Logger log = LoggerFactory.getLogger(StagesResource.class);

    private static final String ENTITY_NAME = "stages";

    private final StagesRepository stagesRepository;

    public StagesResource(StagesRepository stagesRepository) {
        this.stagesRepository = stagesRepository;
    }

    /**
     * POST  /stages : Create a new stages.
     *
     * @param stages the stages to create
     * @return the ResponseEntity with status 201 (Created) and with body the new stages, or with status 400 (Bad Request) if the stages has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/stages")
    @Timed
    public ResponseEntity<Stages> createStages(@RequestBody Stages stages) throws URISyntaxException {
        log.debug("REST request to save Stages : {}", stages);
        if (stages.getId() != null) {
            throw new BadRequestAlertException("A new stages cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Stages result = stagesRepository.save(stages);
        return ResponseEntity.created(new URI("/api/stages/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /stages : Updates an existing stages.
     *
     * @param stages the stages to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated stages,
     * or with status 400 (Bad Request) if the stages is not valid,
     * or with status 500 (Internal Server Error) if the stages couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/stages")
    @Timed
    public ResponseEntity<Stages> updateStages(@RequestBody Stages stages) throws URISyntaxException {
        log.debug("REST request to update Stages : {}", stages);
        if (stages.getId() == null) {
            return createStages(stages);
        }
        Stages result = stagesRepository.save(stages);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, stages.getId().toString()))
            .body(result);
    }

    /**
     * GET  /stages : get all the stages.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of stages in body
     */
    @GetMapping("/stages")
    @Timed
    public List<Stages> getAllStages() {
        log.debug("REST request to get all Stages");
        return stagesRepository.findAll();
        }

    /**
     * GET  /stages/:id : get the "id" stages.
     *
     * @param id the id of the stages to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the stages, or with status 404 (Not Found)
     */
    @GetMapping("/stages/{id}")
    @Timed
    public ResponseEntity<Stages> getStages(@PathVariable Long id) {
        log.debug("REST request to get Stages : {}", id);
        Stages stages = stagesRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(stages));
    }

    /**
     * DELETE  /stages/:id : delete the "id" stages.
     *
     * @param id the id of the stages to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/stages/{id}")
    @Timed
    public ResponseEntity<Void> deleteStages(@PathVariable Long id) {
        log.debug("REST request to delete Stages : {}", id);
        stagesRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
