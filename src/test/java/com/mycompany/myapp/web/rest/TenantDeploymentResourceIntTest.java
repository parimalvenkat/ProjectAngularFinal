package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.Try1App;

import com.mycompany.myapp.domain.TenantDeployment;
import com.mycompany.myapp.repository.TenantDeploymentRepository;
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
 * Test class for the TenantDeploymentResource REST controller.
 *
 * @see TenantDeploymentResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Try1App.class)
public class TenantDeploymentResourceIntTest {

    @Autowired
    private TenantDeploymentRepository tenantDeploymentRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restTenantDeploymentMockMvc;

    private TenantDeployment tenantDeployment;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TenantDeploymentResource tenantDeploymentResource = new TenantDeploymentResource(tenantDeploymentRepository);
        this.restTenantDeploymentMockMvc = MockMvcBuilders.standaloneSetup(tenantDeploymentResource)
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
    public static TenantDeployment createEntity(EntityManager em) {
        TenantDeployment tenantDeployment = new TenantDeployment();
        return tenantDeployment;
    }

    @Before
    public void initTest() {
        tenantDeployment = createEntity(em);
    }

    @Test
    @Transactional
    public void createTenantDeployment() throws Exception {
        int databaseSizeBeforeCreate = tenantDeploymentRepository.findAll().size();

        // Create the TenantDeployment
        restTenantDeploymentMockMvc.perform(post("/api/tenant-deployments")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tenantDeployment)))
            .andExpect(status().isCreated());

        // Validate the TenantDeployment in the database
        List<TenantDeployment> tenantDeploymentList = tenantDeploymentRepository.findAll();
        assertThat(tenantDeploymentList).hasSize(databaseSizeBeforeCreate + 1);
        TenantDeployment testTenantDeployment = tenantDeploymentList.get(tenantDeploymentList.size() - 1);
    }

    @Test
    @Transactional
    public void createTenantDeploymentWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = tenantDeploymentRepository.findAll().size();

        // Create the TenantDeployment with an existing ID
        tenantDeployment.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTenantDeploymentMockMvc.perform(post("/api/tenant-deployments")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tenantDeployment)))
            .andExpect(status().isBadRequest());

        // Validate the TenantDeployment in the database
        List<TenantDeployment> tenantDeploymentList = tenantDeploymentRepository.findAll();
        assertThat(tenantDeploymentList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllTenantDeployments() throws Exception {
        // Initialize the database
        tenantDeploymentRepository.saveAndFlush(tenantDeployment);

        // Get all the tenantDeploymentList
        restTenantDeploymentMockMvc.perform(get("/api/tenant-deployments?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(tenantDeployment.getId().intValue())));
    }

    @Test
    @Transactional
    public void getTenantDeployment() throws Exception {
        // Initialize the database
        tenantDeploymentRepository.saveAndFlush(tenantDeployment);

        // Get the tenantDeployment
        restTenantDeploymentMockMvc.perform(get("/api/tenant-deployments/{id}", tenantDeployment.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(tenantDeployment.getId().intValue()));
    }

    @Test
    @Transactional
    public void getNonExistingTenantDeployment() throws Exception {
        // Get the tenantDeployment
        restTenantDeploymentMockMvc.perform(get("/api/tenant-deployments/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTenantDeployment() throws Exception {
        // Initialize the database
        tenantDeploymentRepository.saveAndFlush(tenantDeployment);
        int databaseSizeBeforeUpdate = tenantDeploymentRepository.findAll().size();

        // Update the tenantDeployment
        TenantDeployment updatedTenantDeployment = tenantDeploymentRepository.findOne(tenantDeployment.getId());
        // Disconnect from session so that the updates on updatedTenantDeployment are not directly saved in db
        em.detach(updatedTenantDeployment);

        restTenantDeploymentMockMvc.perform(put("/api/tenant-deployments")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedTenantDeployment)))
            .andExpect(status().isOk());

        // Validate the TenantDeployment in the database
        List<TenantDeployment> tenantDeploymentList = tenantDeploymentRepository.findAll();
        assertThat(tenantDeploymentList).hasSize(databaseSizeBeforeUpdate);
        TenantDeployment testTenantDeployment = tenantDeploymentList.get(tenantDeploymentList.size() - 1);
    }

    @Test
    @Transactional
    public void updateNonExistingTenantDeployment() throws Exception {
        int databaseSizeBeforeUpdate = tenantDeploymentRepository.findAll().size();

        // Create the TenantDeployment

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restTenantDeploymentMockMvc.perform(put("/api/tenant-deployments")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tenantDeployment)))
            .andExpect(status().isCreated());

        // Validate the TenantDeployment in the database
        List<TenantDeployment> tenantDeploymentList = tenantDeploymentRepository.findAll();
        assertThat(tenantDeploymentList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteTenantDeployment() throws Exception {
        // Initialize the database
        tenantDeploymentRepository.saveAndFlush(tenantDeployment);
        int databaseSizeBeforeDelete = tenantDeploymentRepository.findAll().size();

        // Get the tenantDeployment
        restTenantDeploymentMockMvc.perform(delete("/api/tenant-deployments/{id}", tenantDeployment.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<TenantDeployment> tenantDeploymentList = tenantDeploymentRepository.findAll();
        assertThat(tenantDeploymentList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TenantDeployment.class);
        TenantDeployment tenantDeployment1 = new TenantDeployment();
        tenantDeployment1.setId(1L);
        TenantDeployment tenantDeployment2 = new TenantDeployment();
        tenantDeployment2.setId(tenantDeployment1.getId());
        assertThat(tenantDeployment1).isEqualTo(tenantDeployment2);
        tenantDeployment2.setId(2L);
        assertThat(tenantDeployment1).isNotEqualTo(tenantDeployment2);
        tenantDeployment1.setId(null);
        assertThat(tenantDeployment1).isNotEqualTo(tenantDeployment2);
    }
}
