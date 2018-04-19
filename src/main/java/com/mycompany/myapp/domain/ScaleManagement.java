package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Objects;

/**
 * A ScaleManagement.
 */
@Entity
@Table(name = "scale_management")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class ScaleManagement implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "instancenos", nullable = false)
    private Integer instancenos;

    @OneToOne(optional = false)
    @NotNull
    @JoinColumn(unique = true)
    private Deployment deployments;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getInstancenos() {
        return instancenos;
    }

    public ScaleManagement instancenos(Integer instancenos) {
        this.instancenos = instancenos;
        return this;
    }

    public void setInstancenos(Integer instancenos) {
        this.instancenos = instancenos;
    }

    public Deployment getDeployments() {
        return deployments;
    }

    public ScaleManagement deployments(Deployment deployments) {
        this.deployments = deployments;
        return this;
    }

    public void setDeployments(Deployment deployments) {
        this.deployments = deployments;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ScaleManagement scaleManagement = (ScaleManagement) o;
        if (scaleManagement.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), scaleManagement.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ScaleManagement{" +
            "id=" + getId() +
            ", instancenos='" + getInstancenos() + "'" +
            "}";
    }
}
