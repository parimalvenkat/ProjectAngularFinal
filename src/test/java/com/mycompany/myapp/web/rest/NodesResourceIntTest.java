package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.Try1App;

import com.mycompany.myapp.domain.Nodes;
import com.mycompany.myapp.repository.NodesRepository;
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
 * Test class for the NodesResource REST controller.
 *
 * @see NodesResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Try1App.class)
public class NodesResourceIntTest {

    private static final String DEFAULT_MASTER_URL = "AAAAAAAAAA";
    private static final String UPDATED_MASTER_URL = "BBBBBBBBBB";

    @Autowired
    private NodesRepository nodesRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restNodesMockMvc;

    private Nodes nodes;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final NodesResource nodesResource = new NodesResource(nodesRepository);
        this.restNodesMockMvc = MockMvcBuilders.standaloneSetup(nodesResource)
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
    public static Nodes createEntity(EntityManager em) {
        Nodes nodes = new Nodes()
            .masterUrl(DEFAULT_MASTER_URL);
        return nodes;
    }

    @Before
    public void initTest() {
        nodes = createEntity(em);
    }

    @Test
    @Transactional
    public void createNodes() throws Exception {
        int databaseSizeBeforeCreate = nodesRepository.findAll().size();

        // Create the Nodes
        restNodesMockMvc.perform(post("/api/nodes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(nodes)))
            .andExpect(status().isCreated());

        // Validate the Nodes in the database
        List<Nodes> nodesList = nodesRepository.findAll();
        assertThat(nodesList).hasSize(databaseSizeBeforeCreate + 1);
        Nodes testNodes = nodesList.get(nodesList.size() - 1);
        assertThat(testNodes.getMasterUrl()).isEqualTo(DEFAULT_MASTER_URL);
    }

    @Test
    @Transactional
    public void createNodesWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = nodesRepository.findAll().size();

        // Create the Nodes with an existing ID
        nodes.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restNodesMockMvc.perform(post("/api/nodes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(nodes)))
            .andExpect(status().isBadRequest());

        // Validate the Nodes in the database
        List<Nodes> nodesList = nodesRepository.findAll();
        assertThat(nodesList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllNodes() throws Exception {
        // Initialize the database
        nodesRepository.saveAndFlush(nodes);

        // Get all the nodesList
        restNodesMockMvc.perform(get("/api/nodes?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(nodes.getId().intValue())))
            .andExpect(jsonPath("$.[*].masterUrl").value(hasItem(DEFAULT_MASTER_URL.toString())));
    }

    @Test
    @Transactional
    public void getNodes() throws Exception {
        // Initialize the database
        nodesRepository.saveAndFlush(nodes);

        // Get the nodes
        restNodesMockMvc.perform(get("/api/nodes/{id}", nodes.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(nodes.getId().intValue()))
            .andExpect(jsonPath("$.masterUrl").value(DEFAULT_MASTER_URL.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingNodes() throws Exception {
        // Get the nodes
        restNodesMockMvc.perform(get("/api/nodes/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateNodes() throws Exception {
        // Initialize the database
        nodesRepository.saveAndFlush(nodes);
        int databaseSizeBeforeUpdate = nodesRepository.findAll().size();

        // Update the nodes
        Nodes updatedNodes = nodesRepository.findOne(nodes.getId());
        // Disconnect from session so that the updates on updatedNodes are not directly saved in db
        em.detach(updatedNodes);
        updatedNodes
            .masterUrl(UPDATED_MASTER_URL);

        restNodesMockMvc.perform(put("/api/nodes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedNodes)))
            .andExpect(status().isOk());

        // Validate the Nodes in the database
        List<Nodes> nodesList = nodesRepository.findAll();
        assertThat(nodesList).hasSize(databaseSizeBeforeUpdate);
        Nodes testNodes = nodesList.get(nodesList.size() - 1);
        assertThat(testNodes.getMasterUrl()).isEqualTo(UPDATED_MASTER_URL);
    }

    @Test
    @Transactional
    public void updateNonExistingNodes() throws Exception {
        int databaseSizeBeforeUpdate = nodesRepository.findAll().size();

        // Create the Nodes

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restNodesMockMvc.perform(put("/api/nodes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(nodes)))
            .andExpect(status().isCreated());

        // Validate the Nodes in the database
        List<Nodes> nodesList = nodesRepository.findAll();
        assertThat(nodesList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteNodes() throws Exception {
        // Initialize the database
        nodesRepository.saveAndFlush(nodes);
        int databaseSizeBeforeDelete = nodesRepository.findAll().size();

        // Get the nodes
        restNodesMockMvc.perform(delete("/api/nodes/{id}", nodes.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Nodes> nodesList = nodesRepository.findAll();
        assertThat(nodesList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Nodes.class);
        Nodes nodes1 = new Nodes();
        nodes1.setId(1L);
        Nodes nodes2 = new Nodes();
        nodes2.setId(nodes1.getId());
        assertThat(nodes1).isEqualTo(nodes2);
        nodes2.setId(2L);
        assertThat(nodes1).isNotEqualTo(nodes2);
        nodes1.setId(null);
        assertThat(nodes1).isNotEqualTo(nodes2);
    }
}
