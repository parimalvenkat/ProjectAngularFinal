package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Repositories;

import com.mycompany.myapp.repository.RepositoriesRepository;
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
 * REST controller for managing Repositories.
 */
@RestController
@RequestMapping("/api")
public class RepositoriesResource {

    private final Logger log = LoggerFactory.getLogger(RepositoriesResource.class);

    private static final String ENTITY_NAME = "repositories";

    private final RepositoriesRepository repositoriesRepository;

    public RepositoriesResource(RepositoriesRepository repositoriesRepository) {
        this.repositoriesRepository = repositoriesRepository;
    }

    /**
     * POST  /repositories : Create a new repositories.
     *
     * @param repositories the repositories to create
     * @return the ResponseEntity with status 201 (Created) and with body the new repositories, or with status 400 (Bad Request) if the repositories has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/repositories")
    @Timed
    public ResponseEntity<Repositories> createRepositories(@RequestBody Repositories repositories) throws URISyntaxException {
        log.debug("REST request to save Repositories : {}", repositories);
        if (repositories.getId() != null) {
            throw new BadRequestAlertException("A new repositories cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Repositories result = repositoriesRepository.save(repositories);
        return ResponseEntity.created(new URI("/api/repositories/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /repositories : Updates an existing repositories.
     *
     * @param repositories the repositories to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated repositories,
     * or with status 400 (Bad Request) if the repositories is not valid,
     * or with status 500 (Internal Server Error) if the repositories couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/repositories")
    @Timed
    public ResponseEntity<Repositories> updateRepositories(@RequestBody Repositories repositories) throws URISyntaxException {
        log.debug("REST request to update Repositories : {}", repositories);
        if (repositories.getId() == null) {
            return createRepositories(repositories);
        }
        Repositories result = repositoriesRepository.save(repositories);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, repositories.getId().toString()))
            .body(result);
    }

    /**
     * GET  /repositories : get all the repositories.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of repositories in body
     */
    @GetMapping("/repositories")
    @Timed
    public List<Repositories> getAllRepositories() {
        log.debug("REST request to get all Repositories");
        return repositoriesRepository.findAll();
        }

    /**
     * GET  /repositories/:id : get the "id" repositories.
     *
     * @param id the id of the repositories to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the repositories, or with status 404 (Not Found)
     */
    @GetMapping("/repositories/{id}")
    @Timed
    public ResponseEntity<Repositories> getRepositories(@PathVariable Long id) {
        log.debug("REST request to get Repositories : {}", id);
        Repositories repositories = repositoriesRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(repositories));
    }

    /**
     * DELETE  /repositories/:id : delete the "id" repositories.
     *
     * @param id the id of the repositories to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/repositories/{id}")
    @Timed
    public ResponseEntity<Void> deleteRepositories(@PathVariable Long id) {
        log.debug("REST request to delete Repositories : {}", id);
        repositoriesRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
