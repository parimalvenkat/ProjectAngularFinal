package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.Try1App;

import com.mycompany.myapp.domain.TenantDetails;
import com.mycompany.myapp.repository.TenantDetailsRepository;
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
 * Test class for the TenantDetailsResource REST controller.
 *
 * @see TenantDetailsResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Try1App.class)
public class TenantDetailsResourceIntTest {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBBBBBBB";

    private static final String DEFAULT_CONTACTNAME = "AAAAAAAAAA";
    private static final String UPDATED_CONTACTNAME = "BBBBBBBBBB";

    private static final String DEFAULT_CONTACTEMAIL = "AAAAAAAAAA";
    private static final String UPDATED_CONTACTEMAIL = "BBBBBBBBBB";

    @Autowired
    private TenantDetailsRepository tenantDetailsRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restTenantDetailsMockMvc;

    private TenantDetails tenantDetails;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TenantDetailsResource tenantDetailsResource = new TenantDetailsResource(tenantDetailsRepository);
        this.restTenantDetailsMockMvc = MockMvcBuilders.standaloneSetup(tenantDetailsResource)
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
    public static TenantDetails createEntity(EntityManager em) {
        TenantDetails tenantDetails = new TenantDetails()
            .name(DEFAULT_NAME)
            .description(DEFAULT_DESCRIPTION)
            .contactname(DEFAULT_CONTACTNAME)
            .contactemail(DEFAULT_CONTACTEMAIL);
        return tenantDetails;
    }

    @Before
    public void initTest() {
        tenantDetails = createEntity(em);
    }

    @Test
    @Transactional
    public void createTenantDetails() throws Exception {
        int databaseSizeBeforeCreate = tenantDetailsRepository.findAll().size();

        // Create the TenantDetails
        restTenantDetailsMockMvc.perform(post("/api/tenant-details")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tenantDetails)))
            .andExpect(status().isCreated());

        // Validate the TenantDetails in the database
        List<TenantDetails> tenantDetailsList = tenantDetailsRepository.findAll();
        assertThat(tenantDetailsList).hasSize(databaseSizeBeforeCreate + 1);
        TenantDetails testTenantDetails = tenantDetailsList.get(tenantDetailsList.size() - 1);
        assertThat(testTenantDetails.getName()).isEqualTo(DEFAULT_NAME);
        assertThat(testTenantDetails.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
        assertThat(testTenantDetails.getContactname()).isEqualTo(DEFAULT_CONTACTNAME);
        assertThat(testTenantDetails.getContactemail()).isEqualTo(DEFAULT_CONTACTEMAIL);
    }

    @Test
    @Transactional
    public void createTenantDetailsWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = tenantDetailsRepository.findAll().size();

        // Create the TenantDetails with an existing ID
        tenantDetails.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTenantDetailsMockMvc.perform(post("/api/tenant-details")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tenantDetails)))
            .andExpect(status().isBadRequest());

        // Validate the TenantDetails in the database
        List<TenantDetails> tenantDetailsList = tenantDetailsRepository.findAll();
        assertThat(tenantDetailsList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllTenantDetails() throws Exception {
        // Initialize the database
        tenantDetailsRepository.saveAndFlush(tenantDetails);

        // Get all the tenantDetailsList
        restTenantDetailsMockMvc.perform(get("/api/tenant-details?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(tenantDetails.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME.toString())))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION.toString())))
            .andExpect(jsonPath("$.[*].contactname").value(hasItem(DEFAULT_CONTACTNAME.toString())))
            .andExpect(jsonPath("$.[*].contactemail").value(hasItem(DEFAULT_CONTACTEMAIL.toString())));
    }

    @Test
    @Transactional
    public void getTenantDetails() throws Exception {
        // Initialize the database
        tenantDetailsRepository.saveAndFlush(tenantDetails);

        // Get the tenantDetails
        restTenantDetailsMockMvc.perform(get("/api/tenant-details/{id}", tenantDetails.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(tenantDetails.getId().intValue()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME.toString()))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION.toString()))
            .andExpect(jsonPath("$.contactname").value(DEFAULT_CONTACTNAME.toString()))
            .andExpect(jsonPath("$.contactemail").value(DEFAULT_CONTACTEMAIL.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingTenantDetails() throws Exception {
        // Get the tenantDetails
        restTenantDetailsMockMvc.perform(get("/api/tenant-details/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTenantDetails() throws Exception {
        // Initialize the database
        tenantDetailsRepository.saveAndFlush(tenantDetails);
        int databaseSizeBeforeUpdate = tenantDetailsRepository.findAll().size();

        // Update the tenantDetails
        TenantDetails updatedTenantDetails = tenantDetailsRepository.findOne(tenantDetails.getId());
        // Disconnect from session so that the updates on updatedTenantDetails are not directly saved in db
        em.detach(updatedTenantDetails);
        updatedTenantDetails
            .name(UPDATED_NAME)
            .description(UPDATED_DESCRIPTION)
            .contactname(UPDATED_CONTACTNAME)
            .contactemail(UPDATED_CONTACTEMAIL);

        restTenantDetailsMockMvc.perform(put("/api/tenant-details")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedTenantDetails)))
            .andExpect(status().isOk());

        // Validate the TenantDetails in the database
        List<TenantDetails> tenantDetailsList = tenantDetailsRepository.findAll();
        assertThat(tenantDetailsList).hasSize(databaseSizeBeforeUpdate);
        TenantDetails testTenantDetails = tenantDetailsList.get(tenantDetailsList.size() - 1);
        assertThat(testTenantDetails.getName()).isEqualTo(UPDATED_NAME);
        assertThat(testTenantDetails.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testTenantDetails.getContactname()).isEqualTo(UPDATED_CONTACTNAME);
        assertThat(testTenantDetails.getContactemail()).isEqualTo(UPDATED_CONTACTEMAIL);
    }

    @Test
    @Transactional
    public void updateNonExistingTenantDetails() throws Exception {
        int databaseSizeBeforeUpdate = tenantDetailsRepository.findAll().size();

        // Create the TenantDetails

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restTenantDetailsMockMvc.perform(put("/api/tenant-details")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tenantDetails)))
            .andExpect(status().isCreated());

        // Validate the TenantDetails in the database
        List<TenantDetails> tenantDetailsList = tenantDetailsRepository.findAll();
        assertThat(tenantDetailsList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteTenantDetails() throws Exception {
        // Initialize the database
        tenantDetailsRepository.saveAndFlush(tenantDetails);
        int databaseSizeBeforeDelete = tenantDetailsRepository.findAll().size();

        // Get the tenantDetails
        restTenantDetailsMockMvc.perform(delete("/api/tenant-details/{id}", tenantDetails.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<TenantDetails> tenantDetailsList = tenantDetailsRepository.findAll();
        assertThat(tenantDetailsList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TenantDetails.class);
        TenantDetails tenantDetails1 = new TenantDetails();
        tenantDetails1.setId(1L);
        TenantDetails tenantDetails2 = new TenantDetails();
        tenantDetails2.setId(tenantDetails1.getId());
        assertThat(tenantDetails1).isEqualTo(tenantDetails2);
        tenantDetails2.setId(2L);
        assertThat(tenantDetails1).isNotEqualTo(tenantDetails2);
        tenantDetails1.setId(null);
        assertThat(tenantDetails1).isNotEqualTo(tenantDetails2);
    }
}
