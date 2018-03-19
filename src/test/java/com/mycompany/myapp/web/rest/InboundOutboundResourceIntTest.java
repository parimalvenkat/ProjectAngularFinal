package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.Try1App;

import com.mycompany.myapp.domain.InboundOutbound;
import com.mycompany.myapp.repository.InboundOutboundRepository;
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
 * Test class for the InboundOutboundResource REST controller.
 *
 * @see InboundOutboundResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Try1App.class)
public class InboundOutboundResourceIntTest {

    private static final String DEFAULT_PROTOCOL = "AAAAAAAAAA";
    private static final String UPDATED_PROTOCOL = "BBBBBBBBBB";

    private static final Long DEFAULT_INBOUND = 1L;
    private static final Long UPDATED_INBOUND = 2L;

    private static final Long DEFAULT_OUTBOUND = 1L;
    private static final Long UPDATED_OUTBOUND = 2L;

    @Autowired
    private InboundOutboundRepository inboundOutboundRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restInboundOutboundMockMvc;

    private InboundOutbound inboundOutbound;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final InboundOutboundResource inboundOutboundResource = new InboundOutboundResource(inboundOutboundRepository);
        this.restInboundOutboundMockMvc = MockMvcBuilders.standaloneSetup(inboundOutboundResource)
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
    public static InboundOutbound createEntity(EntityManager em) {
        InboundOutbound inboundOutbound = new InboundOutbound()
            .protocol(DEFAULT_PROTOCOL)
            .inbound(DEFAULT_INBOUND)
            .outbound(DEFAULT_OUTBOUND);
        return inboundOutbound;
    }

    @Before
    public void initTest() {
        inboundOutbound = createEntity(em);
    }

    @Test
    @Transactional
    public void createInboundOutbound() throws Exception {
        int databaseSizeBeforeCreate = inboundOutboundRepository.findAll().size();

        // Create the InboundOutbound
        restInboundOutboundMockMvc.perform(post("/api/inbound-outbounds")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(inboundOutbound)))
            .andExpect(status().isCreated());

        // Validate the InboundOutbound in the database
        List<InboundOutbound> inboundOutboundList = inboundOutboundRepository.findAll();
        assertThat(inboundOutboundList).hasSize(databaseSizeBeforeCreate + 1);
        InboundOutbound testInboundOutbound = inboundOutboundList.get(inboundOutboundList.size() - 1);
        assertThat(testInboundOutbound.getProtocol()).isEqualTo(DEFAULT_PROTOCOL);
        assertThat(testInboundOutbound.getInbound()).isEqualTo(DEFAULT_INBOUND);
        assertThat(testInboundOutbound.getOutbound()).isEqualTo(DEFAULT_OUTBOUND);
    }

    @Test
    @Transactional
    public void createInboundOutboundWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = inboundOutboundRepository.findAll().size();

        // Create the InboundOutbound with an existing ID
        inboundOutbound.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restInboundOutboundMockMvc.perform(post("/api/inbound-outbounds")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(inboundOutbound)))
            .andExpect(status().isBadRequest());

        // Validate the InboundOutbound in the database
        List<InboundOutbound> inboundOutboundList = inboundOutboundRepository.findAll();
        assertThat(inboundOutboundList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllInboundOutbounds() throws Exception {
        // Initialize the database
        inboundOutboundRepository.saveAndFlush(inboundOutbound);

        // Get all the inboundOutboundList
        restInboundOutboundMockMvc.perform(get("/api/inbound-outbounds?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(inboundOutbound.getId().intValue())))
            .andExpect(jsonPath("$.[*].protocol").value(hasItem(DEFAULT_PROTOCOL.toString())))
            .andExpect(jsonPath("$.[*].inbound").value(hasItem(DEFAULT_INBOUND.intValue())))
            .andExpect(jsonPath("$.[*].outbound").value(hasItem(DEFAULT_OUTBOUND.intValue())));
    }

    @Test
    @Transactional
    public void getInboundOutbound() throws Exception {
        // Initialize the database
        inboundOutboundRepository.saveAndFlush(inboundOutbound);

        // Get the inboundOutbound
        restInboundOutboundMockMvc.perform(get("/api/inbound-outbounds/{id}", inboundOutbound.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(inboundOutbound.getId().intValue()))
            .andExpect(jsonPath("$.protocol").value(DEFAULT_PROTOCOL.toString()))
            .andExpect(jsonPath("$.inbound").value(DEFAULT_INBOUND.intValue()))
            .andExpect(jsonPath("$.outbound").value(DEFAULT_OUTBOUND.intValue()));
    }

    @Test
    @Transactional
    public void getNonExistingInboundOutbound() throws Exception {
        // Get the inboundOutbound
        restInboundOutboundMockMvc.perform(get("/api/inbound-outbounds/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateInboundOutbound() throws Exception {
        // Initialize the database
        inboundOutboundRepository.saveAndFlush(inboundOutbound);
        int databaseSizeBeforeUpdate = inboundOutboundRepository.findAll().size();

        // Update the inboundOutbound
        InboundOutbound updatedInboundOutbound = inboundOutboundRepository.findOne(inboundOutbound.getId());
        // Disconnect from session so that the updates on updatedInboundOutbound are not directly saved in db
        em.detach(updatedInboundOutbound);
        updatedInboundOutbound
            .protocol(UPDATED_PROTOCOL)
            .inbound(UPDATED_INBOUND)
            .outbound(UPDATED_OUTBOUND);

        restInboundOutboundMockMvc.perform(put("/api/inbound-outbounds")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedInboundOutbound)))
            .andExpect(status().isOk());

        // Validate the InboundOutbound in the database
        List<InboundOutbound> inboundOutboundList = inboundOutboundRepository.findAll();
        assertThat(inboundOutboundList).hasSize(databaseSizeBeforeUpdate);
        InboundOutbound testInboundOutbound = inboundOutboundList.get(inboundOutboundList.size() - 1);
        assertThat(testInboundOutbound.getProtocol()).isEqualTo(UPDATED_PROTOCOL);
        assertThat(testInboundOutbound.getInbound()).isEqualTo(UPDATED_INBOUND);
        assertThat(testInboundOutbound.getOutbound()).isEqualTo(UPDATED_OUTBOUND);
    }

    @Test
    @Transactional
    public void updateNonExistingInboundOutbound() throws Exception {
        int databaseSizeBeforeUpdate = inboundOutboundRepository.findAll().size();

        // Create the InboundOutbound

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restInboundOutboundMockMvc.perform(put("/api/inbound-outbounds")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(inboundOutbound)))
            .andExpect(status().isCreated());

        // Validate the InboundOutbound in the database
        List<InboundOutbound> inboundOutboundList = inboundOutboundRepository.findAll();
        assertThat(inboundOutboundList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteInboundOutbound() throws Exception {
        // Initialize the database
        inboundOutboundRepository.saveAndFlush(inboundOutbound);
        int databaseSizeBeforeDelete = inboundOutboundRepository.findAll().size();

        // Get the inboundOutbound
        restInboundOutboundMockMvc.perform(delete("/api/inbound-outbounds/{id}", inboundOutbound.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<InboundOutbound> inboundOutboundList = inboundOutboundRepository.findAll();
        assertThat(inboundOutboundList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(InboundOutbound.class);
        InboundOutbound inboundOutbound1 = new InboundOutbound();
        inboundOutbound1.setId(1L);
        InboundOutbound inboundOutbound2 = new InboundOutbound();
        inboundOutbound2.setId(inboundOutbound1.getId());
        assertThat(inboundOutbound1).isEqualTo(inboundOutbound2);
        inboundOutbound2.setId(2L);
        assertThat(inboundOutbound1).isNotEqualTo(inboundOutbound2);
        inboundOutbound1.setId(null);
        assertThat(inboundOutbound1).isNotEqualTo(inboundOutbound2);
    }
}
