package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.Try1App;

import com.mycompany.myapp.domain.TenantContactDetails;
import com.mycompany.myapp.repository.TenantContactDetailsRepository;
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
 * Test class for the TenantContactDetailsResource REST controller.
 *
 * @see TenantContactDetailsResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Try1App.class)
public class TenantContactDetailsResourceIntTest {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_E_MAIL = "AAAAAAAAAA";
    private static final String UPDATED_E_MAIL = "BBBBBBBBBB";

    private static final Long DEFAULT_MOBILE_NUMBER = 1L;
    private static final Long UPDATED_MOBILE_NUMBER = 2L;

    private static final String DEFAULT_COUNTRY = "AAAAAAAAAA";
    private static final String UPDATED_COUNTRY = "BBBBBBBBBB";

    @Autowired
    private TenantContactDetailsRepository tenantContactDetailsRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restTenantContactDetailsMockMvc;

    private TenantContactDetails tenantContactDetails;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final TenantContactDetailsResource tenantContactDetailsResource = new TenantContactDetailsResource(tenantContactDetailsRepository);
        this.restTenantContactDetailsMockMvc = MockMvcBuilders.standaloneSetup(tenantContactDetailsResource)
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
    public static TenantContactDetails createEntity(EntityManager em) {
        TenantContactDetails tenantContactDetails = new TenantContactDetails()
            .name(DEFAULT_NAME)
            .eMail(DEFAULT_E_MAIL)
            .mobileNumber(DEFAULT_MOBILE_NUMBER)
            .country(DEFAULT_COUNTRY);
        return tenantContactDetails;
    }

    @Before
    public void initTest() {
        tenantContactDetails = createEntity(em);
    }

    @Test
    @Transactional
    public void createTenantContactDetails() throws Exception {
        int databaseSizeBeforeCreate = tenantContactDetailsRepository.findAll().size();

        // Create the TenantContactDetails
        restTenantContactDetailsMockMvc.perform(post("/api/tenant-contact-details")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tenantContactDetails)))
            .andExpect(status().isCreated());

        // Validate the TenantContactDetails in the database
        List<TenantContactDetails> tenantContactDetailsList = tenantContactDetailsRepository.findAll();
        assertThat(tenantContactDetailsList).hasSize(databaseSizeBeforeCreate + 1);
        TenantContactDetails testTenantContactDetails = tenantContactDetailsList.get(tenantContactDetailsList.size() - 1);
        assertThat(testTenantContactDetails.getName()).isEqualTo(DEFAULT_NAME);
        assertThat(testTenantContactDetails.geteMail()).isEqualTo(DEFAULT_E_MAIL);
        assertThat(testTenantContactDetails.getMobileNumber()).isEqualTo(DEFAULT_MOBILE_NUMBER);
        assertThat(testTenantContactDetails.getCountry()).isEqualTo(DEFAULT_COUNTRY);
    }

    @Test
    @Transactional
    public void createTenantContactDetailsWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = tenantContactDetailsRepository.findAll().size();

        // Create the TenantContactDetails with an existing ID
        tenantContactDetails.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTenantContactDetailsMockMvc.perform(post("/api/tenant-contact-details")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tenantContactDetails)))
            .andExpect(status().isBadRequest());

        // Validate the TenantContactDetails in the database
        List<TenantContactDetails> tenantContactDetailsList = tenantContactDetailsRepository.findAll();
        assertThat(tenantContactDetailsList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllTenantContactDetails() throws Exception {
        // Initialize the database
        tenantContactDetailsRepository.saveAndFlush(tenantContactDetails);

        // Get all the tenantContactDetailsList
        restTenantContactDetailsMockMvc.perform(get("/api/tenant-contact-details?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(tenantContactDetails.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME.toString())))
            .andExpect(jsonPath("$.[*].eMail").value(hasItem(DEFAULT_E_MAIL.toString())))
            .andExpect(jsonPath("$.[*].mobileNumber").value(hasItem(DEFAULT_MOBILE_NUMBER.intValue())))
            .andExpect(jsonPath("$.[*].country").value(hasItem(DEFAULT_COUNTRY.toString())));
    }

    @Test
    @Transactional
    public void getTenantContactDetails() throws Exception {
        // Initialize the database
        tenantContactDetailsRepository.saveAndFlush(tenantContactDetails);

        // Get the tenantContactDetails
        restTenantContactDetailsMockMvc.perform(get("/api/tenant-contact-details/{id}", tenantContactDetails.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(tenantContactDetails.getId().intValue()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME.toString()))
            .andExpect(jsonPath("$.eMail").value(DEFAULT_E_MAIL.toString()))
            .andExpect(jsonPath("$.mobileNumber").value(DEFAULT_MOBILE_NUMBER.intValue()))
            .andExpect(jsonPath("$.country").value(DEFAULT_COUNTRY.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingTenantContactDetails() throws Exception {
        // Get the tenantContactDetails
        restTenantContactDetailsMockMvc.perform(get("/api/tenant-contact-details/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTenantContactDetails() throws Exception {
        // Initialize the database
        tenantContactDetailsRepository.saveAndFlush(tenantContactDetails);
        int databaseSizeBeforeUpdate = tenantContactDetailsRepository.findAll().size();

        // Update the tenantContactDetails
        TenantContactDetails updatedTenantContactDetails = tenantContactDetailsRepository.findOne(tenantContactDetails.getId());
        // Disconnect from session so that the updates on updatedTenantContactDetails are not directly saved in db
        em.detach(updatedTenantContactDetails);
        updatedTenantContactDetails
            .name(UPDATED_NAME)
            .eMail(UPDATED_E_MAIL)
            .mobileNumber(UPDATED_MOBILE_NUMBER)
            .country(UPDATED_COUNTRY);

        restTenantContactDetailsMockMvc.perform(put("/api/tenant-contact-details")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedTenantContactDetails)))
            .andExpect(status().isOk());

        // Validate the TenantContactDetails in the database
        List<TenantContactDetails> tenantContactDetailsList = tenantContactDetailsRepository.findAll();
        assertThat(tenantContactDetailsList).hasSize(databaseSizeBeforeUpdate);
        TenantContactDetails testTenantContactDetails = tenantContactDetailsList.get(tenantContactDetailsList.size() - 1);
        assertThat(testTenantContactDetails.getName()).isEqualTo(UPDATED_NAME);
        assertThat(testTenantContactDetails.geteMail()).isEqualTo(UPDATED_E_MAIL);
        assertThat(testTenantContactDetails.getMobileNumber()).isEqualTo(UPDATED_MOBILE_NUMBER);
        assertThat(testTenantContactDetails.getCountry()).isEqualTo(UPDATED_COUNTRY);
    }

    @Test
    @Transactional
    public void updateNonExistingTenantContactDetails() throws Exception {
        int databaseSizeBeforeUpdate = tenantContactDetailsRepository.findAll().size();

        // Create the TenantContactDetails

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restTenantContactDetailsMockMvc.perform(put("/api/tenant-contact-details")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(tenantContactDetails)))
            .andExpect(status().isCreated());

        // Validate the TenantContactDetails in the database
        List<TenantContactDetails> tenantContactDetailsList = tenantContactDetailsRepository.findAll();
        assertThat(tenantContactDetailsList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteTenantContactDetails() throws Exception {
        // Initialize the database
        tenantContactDetailsRepository.saveAndFlush(tenantContactDetails);
        int databaseSizeBeforeDelete = tenantContactDetailsRepository.findAll().size();

        // Get the tenantContactDetails
        restTenantContactDetailsMockMvc.perform(delete("/api/tenant-contact-details/{id}", tenantContactDetails.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<TenantContactDetails> tenantContactDetailsList = tenantContactDetailsRepository.findAll();
        assertThat(tenantContactDetailsList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TenantContactDetails.class);
        TenantContactDetails tenantContactDetails1 = new TenantContactDetails();
        tenantContactDetails1.setId(1L);
        TenantContactDetails tenantContactDetails2 = new TenantContactDetails();
        tenantContactDetails2.setId(tenantContactDetails1.getId());
        assertThat(tenantContactDetails1).isEqualTo(tenantContactDetails2);
        tenantContactDetails2.setId(2L);
        assertThat(tenantContactDetails1).isNotEqualTo(tenantContactDetails2);
        tenantContactDetails1.setId(null);
        assertThat(tenantContactDetails1).isNotEqualTo(tenantContactDetails2);
    }
}
