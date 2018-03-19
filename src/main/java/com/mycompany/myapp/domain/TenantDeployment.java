package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A TenantDeployment.
 */
@Entity
@Table(name = "tenant_deployment")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class TenantDeployment implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @OneToOne
    @JoinColumn(unique = true)
    private TenantDetails tenantDepoloymentToDetails;

    @OneToOne
    @JoinColumn(unique = true)
    private Deployment tenantDeploymentToDeployment;

    @OneToOne
    @JoinColumn(unique = true)
    private Stages tenantDeploymentToStages;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TenantDetails getTenantDepoloymentToDetails() {
        return tenantDepoloymentToDetails;
    }

    public TenantDeployment tenantDepoloymentToDetails(TenantDetails tenantDetails) {
        this.tenantDepoloymentToDetails = tenantDetails;
        return this;
    }

    public void setTenantDepoloymentToDetails(TenantDetails tenantDetails) {
        this.tenantDepoloymentToDetails = tenantDetails;
    }

    public Deployment getTenantDeploymentToDeployment() {
        return tenantDeploymentToDeployment;
    }

    public TenantDeployment tenantDeploymentToDeployment(Deployment deployment) {
        this.tenantDeploymentToDeployment = deployment;
        return this;
    }

    public void setTenantDeploymentToDeployment(Deployment deployment) {
        this.tenantDeploymentToDeployment = deployment;
    }

    public Stages getTenantDeploymentToStages() {
        return tenantDeploymentToStages;
    }

    public TenantDeployment tenantDeploymentToStages(Stages stages) {
        this.tenantDeploymentToStages = stages;
        return this;
    }

    public void setTenantDeploymentToStages(Stages stages) {
        this.tenantDeploymentToStages = stages;
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
        TenantDeployment tenantDeployment = (TenantDeployment) o;
        if (tenantDeployment.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), tenantDeployment.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "TenantDeployment{" +
            "id=" + getId() +
            "}";
    }
}
