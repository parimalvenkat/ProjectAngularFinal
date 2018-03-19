package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.Try1App;

import com.mycompany.myapp.domain.Stages;
import com.mycompany.myapp.repository.StagesRepository;
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
 * Test class for the StagesResource REST controller.
 *
 * @see StagesResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Try1App.class)
public class StagesResourceIntTest {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    @Autowired
    private StagesRepository stagesRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restStagesMockMvc;

    private Stages stages;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final StagesResource stagesResource = new StagesResource(stagesRepository);
        this.restStagesMockMvc = MockMvcBuilders.standaloneSetup(stagesResource)
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
    public static Stages createEntity(EntityManager em) {
        Stages stages = new Stages()
            .name(DEFAULT_NAME);
        return stages;
    }

    @Before
    public void initTest() {
        stages = createEntity(em);
    }

    @Test
    @Transactional
    public void createStages() throws Exception {
        int databaseSizeBeforeCreate = stagesRepository.findAll().size();

        // Create the Stages
        restStagesMockMvc.perform(post("/api/stages")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(stages)))
            .andExpect(status().isCreated());

        // Validate the Stages in the database
        List<Stages> stagesList = stagesRepository.findAll();
        assertThat(stagesList).hasSize(databaseSizeBeforeCreate + 1);
        Stages testStages = stagesList.get(stagesList.size() - 1);
        assertThat(testStages.getName()).isEqualTo(DEFAULT_NAME);
    }

    @Test
    @Transactional
    public void createStagesWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = stagesRepository.findAll().size();

        // Create the Stages with an existing ID
        stages.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restStagesMockMvc.perform(post("/api/stages")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(stages)))
            .andExpect(status().isBadRequest());

        // Validate the Stages in the database
        List<Stages> stagesList = stagesRepository.findAll();
        assertThat(stagesList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllStages() throws Exception {
        // Initialize the database
        stagesRepository.saveAndFlush(stages);

        // Get all the stagesList
        restStagesMockMvc.perform(get("/api/stages?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(stages.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME.toString())));
    }

    @Test
    @Transactional
    public void getStages() throws Exception {
        // Initialize the database
        stagesRepository.saveAndFlush(stages);

        // Get the stages
        restStagesMockMvc.perform(get("/api/stages/{id}", stages.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(stages.getId().intValue()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingStages() throws Exception {
        // Get the stages
        restStagesMockMvc.perform(get("/api/stages/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateStages() throws Exception {
        // Initialize the database
        stagesRepository.saveAndFlush(stages);
        int databaseSizeBeforeUpdate = stagesRepository.findAll().size();

        // Update the stages
        Stages updatedStages = stagesRepository.findOne(stages.getId());
        // Disconnect from session so that the updates on updatedStages are not directly saved in db
        em.detach(updatedStages);
        updatedStages
            .name(UPDATED_NAME);

        restStagesMockMvc.perform(put("/api/stages")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedStages)))
            .andExpect(status().isOk());

        // Validate the Stages in the database
        List<Stages> stagesList = stagesRepository.findAll();
        assertThat(stagesList).hasSize(databaseSizeBeforeUpdate);
        Stages testStages = stagesList.get(stagesList.size() - 1);
        assertThat(testStages.getName()).isEqualTo(UPDATED_NAME);
    }

    @Test
    @Transactional
    public void updateNonExistingStages() throws Exception {
        int databaseSizeBeforeUpdate = stagesRepository.findAll().size();

        // Create the Stages

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restStagesMockMvc.perform(put("/api/stages")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(stages)))
            .andExpect(status().isCreated());

        // Validate the Stages in the database
        List<Stages> stagesList = stagesRepository.findAll();
        assertThat(stagesList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteStages() throws Exception {
        // Initialize the database
        stagesRepository.saveAndFlush(stages);
        int databaseSizeBeforeDelete = stagesRepository.findAll().size();

        // Get the stages
        restStagesMockMvc.perform(delete("/api/stages/{id}", stages.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Stages> stagesList = stagesRepository.findAll();
        assertThat(stagesList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Stages.class);
        Stages stages1 = new Stages();
        stages1.setId(1L);
        Stages stages2 = new Stages();
        stages2.setId(stages1.getId());
        assertThat(stages1).isEqualTo(stages2);
        stages2.setId(2L);
        assertThat(stages1).isNotEqualTo(stages2);
        stages1.setId(null);
        assertThat(stages1).isNotEqualTo(stages2);
    }
}
