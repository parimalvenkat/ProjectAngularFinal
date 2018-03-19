package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.Try1App;

import com.mycompany.myapp.domain.Deployment;
import com.mycompany.myapp.repository.DeploymentRepository;
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
 * Test class for the DeploymentResource REST controller.
 *
 * @see DeploymentResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Try1App.class)
public class DeploymentResourceIntTest {

    private static final String DEFAULT_DESCRIPTIONS = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTIONS = "BBBBBBBBBB";

    private static final String DEFAULT_PODS = "AAAAAAAAAA";
    private static final String UPDATED_PODS = "BBBBBBBBBB";

    private static final String DEFAULT_APPLICATIONS = "AAAAAAAAAA";
    private static final String UPDATED_APPLICATIONS = "BBBBBBBBBB";

    private static final String DEFAULT_TENANT = "AAAAAAAAAA";
    private static final String UPDATED_TENANT = "BBBBBBBBBB";

    private static final String DEFAULT_STAGE = "AAAAAAAAAA";
    private static final String UPDATED_STAGE = "BBBBBBBBBB";

    @Autowired
    private DeploymentRepository deploymentRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restDeploymentMockMvc;

    private Deployment deployment;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final DeploymentResource deploymentResource = new DeploymentResource(deploymentRepository);
        this.restDeploymentMockMvc = MockMvcBuilders.standaloneSetup(deploymentResource)
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
    public static Deployment createEntity(EntityManager em) {
        Deployment deployment = new Deployment()
            .descriptions(DEFAULT_DESCRIPTIONS)
            .pods(DEFAULT_PODS)
            .applications(DEFAULT_APPLICATIONS)
            .tenant(DEFAULT_TENANT)
            .stage(DEFAULT_STAGE);
        return deployment;
    }

    @Before
    public void initTest() {
        deployment = createEntity(em);
    }

    @Test
    @Transactional
    public void createDeployment() throws Exception {
        int databaseSizeBeforeCreate = deploymentRepository.findAll().size();

        // Create the Deployment
        restDeploymentMockMvc.perform(post("/api/deployments")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(deployment)))
            .andExpect(status().isCreated());

        // Validate the Deployment in the database
        List<Deployment> deploymentList = deploymentRepository.findAll();
        assertThat(deploymentList).hasSize(databaseSizeBeforeCreate + 1);
        Deployment testDeployment = deploymentList.get(deploymentList.size() - 1);
        assertThat(testDeployment.getDescriptions()).isEqualTo(DEFAULT_DESCRIPTIONS);
        assertThat(testDeployment.getPods()).isEqualTo(DEFAULT_PODS);
        assertThat(testDeployment.getApplications()).isEqualTo(DEFAULT_APPLICATIONS);
        assertThat(testDeployment.getTenant()).isEqualTo(DEFAULT_TENANT);
        assertThat(testDeployment.getStage()).isEqualTo(DEFAULT_STAGE);
    }

    @Test
    @Transactional
    public void createDeploymentWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = deploymentRepository.findAll().size();

        // Create the Deployment with an existing ID
        deployment.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restDeploymentMockMvc.perform(post("/api/deployments")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(deployment)))
            .andExpect(status().isBadRequest());

        // Validate the Deployment in the database
        List<Deployment> deploymentList = deploymentRepository.findAll();
        assertThat(deploymentList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllDeployments() throws Exception {
        // Initialize the database
        deploymentRepository.saveAndFlush(deployment);

        // Get all the deploymentList
        restDeploymentMockMvc.perform(get("/api/deployments?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(deployment.getId().intValue())))
            .andExpect(jsonPath("$.[*].descriptions").value(hasItem(DEFAULT_DESCRIPTIONS.toString())))
            .andExpect(jsonPath("$.[*].pods").value(hasItem(DEFAULT_PODS.toString())))
            .andExpect(jsonPath("$.[*].applications").value(hasItem(DEFAULT_APPLICATIONS.toString())))
            .andExpect(jsonPath("$.[*].tenant").value(hasItem(DEFAULT_TENANT.toString())))
            .andExpect(jsonPath("$.[*].stage").value(hasItem(DEFAULT_STAGE.toString())));
    }

    @Test
    @Transactional
    public void getDeployment() throws Exception {
        // Initialize the database
        deploymentRepository.saveAndFlush(deployment);

        // Get the deployment
        restDeploymentMockMvc.perform(get("/api/deployments/{id}", deployment.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(deployment.getId().intValue()))
            .andExpect(jsonPath("$.descriptions").value(DEFAULT_DESCRIPTIONS.toString()))
            .andExpect(jsonPath("$.pods").value(DEFAULT_PODS.toString()))
            .andExpect(jsonPath("$.applications").value(DEFAULT_APPLICATIONS.toString()))
            .andExpect(jsonPath("$.tenant").value(DEFAULT_TENANT.toString()))
            .andExpect(jsonPath("$.stage").value(DEFAULT_STAGE.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingDeployment() throws Exception {
        // Get the deployment
        restDeploymentMockMvc.perform(get("/api/deployments/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateDeployment() throws Exception {
        // Initialize the database
        deploymentRepository.saveAndFlush(deployment);
        int databaseSizeBeforeUpdate = deploymentRepository.findAll().size();

        // Update the deployment
        Deployment updatedDeployment = deploymentRepository.findOne(deployment.getId());
        // Disconnect from session so that the updates on updatedDeployment are not directly saved in db
        em.detach(updatedDeployment);
        updatedDeployment
            .descriptions(UPDATED_DESCRIPTIONS)
            .pods(UPDATED_PODS)
            .applications(UPDATED_APPLICATIONS)
            .tenant(UPDATED_TENANT)
            .stage(UPDATED_STAGE);

        restDeploymentMockMvc.perform(put("/api/deployments")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedDeployment)))
            .andExpect(status().isOk());

        // Validate the Deployment in the database
        List<Deployment> deploymentList = deploymentRepository.findAll();
        assertThat(deploymentList).hasSize(databaseSizeBeforeUpdate);
        Deployment testDeployment = deploymentList.get(deploymentList.size() - 1);
        assertThat(testDeployment.getDescriptions()).isEqualTo(UPDATED_DESCRIPTIONS);
        assertThat(testDeployment.getPods()).isEqualTo(UPDATED_PODS);
        assertThat(testDeployment.getApplications()).isEqualTo(UPDATED_APPLICATIONS);
        assertThat(testDeployment.getTenant()).isEqualTo(UPDATED_TENANT);
        assertThat(testDeployment.getStage()).isEqualTo(UPDATED_STAGE);
    }

    @Test
    @Transactional
    public void updateNonExistingDeployment() throws Exception {
        int databaseSizeBeforeUpdate = deploymentRepository.findAll().size();

        // Create the Deployment

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restDeploymentMockMvc.perform(put("/api/deployments")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(deployment)))
            .andExpect(status().isCreated());

        // Validate the Deployment in the database
        List<Deployment> deploymentList = deploymentRepository.findAll();
        assertThat(deploymentList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteDeployment() throws Exception {
        // Initialize the database
        deploymentRepository.saveAndFlush(deployment);
        int databaseSizeBeforeDelete = deploymentRepository.findAll().size();

        // Get the deployment
        restDeploymentMockMvc.perform(delete("/api/deployments/{id}", deployment.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Deployment> deploymentList = deploymentRepository.findAll();
        assertThat(deploymentList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Deployment.class);
        Deployment deployment1 = new Deployment();
        deployment1.setId(1L);
        Deployment deployment2 = new Deployment();
        deployment2.setId(deployment1.getId());
        assertThat(deployment1).isEqualTo(deployment2);
        deployment2.setId(2L);
        assertThat(deployment1).isNotEqualTo(deployment2);
        deployment1.setId(null);
        assertThat(deployment1).isNotEqualTo(deployment2);
    }
}
