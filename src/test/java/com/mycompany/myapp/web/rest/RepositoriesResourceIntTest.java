package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.Try1App;

import com.mycompany.myapp.domain.Repositories;
import com.mycompany.myapp.repository.RepositoriesRepository;
import com.mycompany.myapp.web.rest.errors.ExceptionTranslator;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

import static com.mycompany.myapp.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the RepositoriesResource REST controller.
 *
 * @see RepositoriesResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Try1App.class)
public class RepositoriesResourceIntTest {

    private static final String DEFAULT_PROTOCOL = "AAAAAAAAAA";
    private static final String UPDATED_PROTOCOL = "BBBBBBBBBB";

    private static final String DEFAULT_HOSTNAME = "AAAAAAAAAA";
    private static final String UPDATED_HOSTNAME = "BBBBBBBBBB";

    private static final Long DEFAULT_PORT = 1L;
    private static final Long UPDATED_PORT = 2L;

    private static final String DEFAULT_USER_NAME = "AAAAAAAAAA";
    private static final String UPDATED_USER_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_PASSWORD = "AAAAAAAAAA";
    private static final String UPDATED_PASSWORD = "BBBBBBBBBB";

    private static final String DEFAULT_SECRET = "AAAAAAAAAA";
    private static final String UPDATED_SECRET = "BBBBBBBBBB";

    @Autowired
    private RepositoriesRepository repositoriesRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restRepositoriesMockMvc;

    private Repositories repositories;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final RepositoriesResource repositoriesResource = new RepositoriesResource(repositoriesRepository);
        this.restRepositoriesMockMvc = MockMvcBuilders.standaloneSetup(repositoriesResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Repositories createEntity(EntityManager em) {
        Repositories repositories = new Repositories()
            .protocol(DEFAULT_PROTOCOL)
            .hostname(DEFAULT_HOSTNAME)
            .port(DEFAULT_PORT)
            .userName(DEFAULT_USER_NAME)
            .password(DEFAULT_PASSWORD)
            .secret(DEFAULT_SECRET);
        return repositories;
    }

    @Before
    public void initTest() {
        repositories = createEntity(em);
    }

    @Test
    @Transactional
    public void createRepositories() throws Exception {
        int databaseSizeBeforeCreate = repositoriesRepository.findAll().size();

        // Create the Repositories
        restRepositoriesMockMvc.perform(post("/api/repositories")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(repositories)))
            .andExpect(status().isCreated());

        // Validate the Repositories in the database
        List<Repositories> repositoriesList = repositoriesRepository.findAll();
        assertThat(repositoriesList).hasSize(databaseSizeBeforeCreate + 1);
        Repositories testRepositories = repositoriesList.get(repositoriesList.size() - 1);
        assertThat(testRepositories.getProtocol()).isEqualTo(DEFAULT_PROTOCOL);
        assertThat(testRepositories.getHostname()).isEqualTo(DEFAULT_HOSTNAME);
        assertThat(testRepositories.getPort()).isEqualTo(DEFAULT_PORT);
        assertThat(testRepositories.getUserName()).isEqualTo(DEFAULT_USER_NAME);
        assertThat(testRepositories.getPassword()).isEqualTo(DEFAULT_PASSWORD);
        assertThat(testRepositories.getSecret()).isEqualTo(DEFAULT_SECRET);
    }

    @Test
    @Transactional
    public void createRepositoriesWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = repositoriesRepository.findAll().size();

        // Create the Repositories with an existing ID
        repositories.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restRepositoriesMockMvc.perform(post("/api/repositories")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(repositories)))
            .andExpect(status().isBadRequest());

        // Validate the Repositories in the database
        List<Repositories> repositoriesList = repositoriesRepository.findAll();
        assertThat(repositoriesList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllRepositories() throws Exception {
        // Initialize the database
        repositoriesRepository.saveAndFlush(repositories);

        // Get all the repositoriesList
        restRepositoriesMockMvc.perform(get("/api/repositories?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(repositories.getId().intValue())))
            .andExpect(jsonPath("$.[*].protocol").value(hasItem(DEFAULT_PROTOCOL.toString())))
            .andExpect(jsonPath("$.[*].hostname").value(hasItem(DEFAULT_HOSTNAME.toString())))
            .andExpect(jsonPath("$.[*].port").value(hasItem(DEFAULT_PORT.intValue())))
            .andExpect(jsonPath("$.[*].userName").value(hasItem(DEFAULT_USER_NAME.toString())))
            .andExpect(jsonPath("$.[*].password").value(hasItem(DEFAULT_PASSWORD.toString())))
            .andExpect(jsonPath("$.[*].secret").value(hasItem(DEFAULT_SECRET.toString())));
    }

    @Test
    @Transactional
    public void getRepositories() throws Exception {
        // Initialize the database
        repositoriesRepository.saveAndFlush(repositories);

        // Get the repositories
        restRepositoriesMockMvc.perform(get("/api/repositories/{id}", repositories.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(repositories.getId().intValue()))
            .andExpect(jsonPath("$.protocol").value(DEFAULT_PROTOCOL.toString()))
            .andExpect(jsonPath("$.hostname").value(DEFAULT_HOSTNAME.toString()))
            .andExpect(jsonPath("$.port").value(DEFAULT_PORT.intValue()))
            .andExpect(jsonPath("$.userName").value(DEFAULT_USER_NAME.toString()))
            .andExpect(jsonPath("$.password").value(DEFAULT_PASSWORD.toString()))
            .andExpect(jsonPath("$.secret").value(DEFAULT_SECRET.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingRepositories() throws Exception {
        // Get the repositories
        restRepositoriesMockMvc.perform(get("/api/repositories/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateRepositories() throws Exception {
        // Initialize the database
        repositoriesRepository.saveAndFlush(repositories);
        int databaseSizeBeforeUpdate = repositoriesRepository.findAll().size();

        // Update the repositories
        Repositories updatedRepositories = repositoriesRepository.findOne(repositories.getId());
        // Disconnect from session so that the updates on updatedRepositories are not directly saved in db
        em.detach(updatedRepositories);
        updatedRepositories
            .protocol(UPDATED_PROTOCOL)
            .hostname(UPDATED_HOSTNAME)
            .port(UPDATED_PORT)
            .userName(UPDATED_USER_NAME)
            .password(UPDATED_PASSWORD)
            .secret(UPDATED_SECRET);

        restRepositoriesMockMvc.perform(put("/api/repositories")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedRepositories)))
            .andExpect(status().isOk());

        // Validate the Repositories in the database
        List<Repositories> repositoriesList = repositoriesRepository.findAll();
        assertThat(repositoriesList).hasSize(databaseSizeBeforeUpdate);
        Repositories testRepositories = repositoriesList.get(repositoriesList.size() - 1);
        assertThat(testRepositories.getProtocol()).isEqualTo(UPDATED_PROTOCOL);
        assertThat(testRepositories.getHostname()).isEqualTo(UPDATED_HOSTNAME);
        assertThat(testRepositories.getPort()).isEqualTo(UPDATED_PORT);
        assertThat(testRepositories.getUserName()).isEqualTo(UPDATED_USER_NAME);
        assertThat(testRepositories.getPassword()).isEqualTo(UPDATED_PASSWORD);
        assertThat(testRepositories.getSecret()).isEqualTo(UPDATED_SECRET);
    }

    @Test
    @Transactional
    public void updateNonExistingRepositories() throws Exception {
        int databaseSizeBeforeUpdate = repositoriesRepository.findAll().size();

        // Create the Repositories

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restRepositoriesMockMvc.perform(put("/api/repositories")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(repositories)))
            .andExpect(status().isCreated());

        // Validate the Repositories in the database
        List<Repositories> repositoriesList = repositoriesRepository.findAll();
        assertThat(repositoriesList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteRepositories() throws Exception {
        // Initialize the database
        repositoriesRepository.saveAndFlush(repositories);
        int databaseSizeBeforeDelete = repositoriesRepository.findAll().size();

        // Get the repositories
        restRepositoriesMockMvc.perform(delete("/api/repositories/{id}", repositories.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Repositories> repositoriesList = repositoriesRepository.findAll();
        assertThat(repositoriesList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Repositories.class);
        Repositories repositories1 = new Repositories();
        repositories1.setId(1L);
        Repositories repositories2 = new Repositories();
        repositories2.setId(repositories1.getId());
        assertThat(repositories1).isEqualTo(repositories2);
        repositories2.setId(2L);
        assertThat(repositories1).isNotEqualTo(repositories2);
        repositories1.setId(null);
        assertThat(repositories1).isNotEqualTo(repositories2);
    }
}
