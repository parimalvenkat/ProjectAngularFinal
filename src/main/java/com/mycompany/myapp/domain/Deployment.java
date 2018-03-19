package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Deployment.
 */
@Entity
@Table(name = "deployment")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Deployment implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "descriptions")
    private String descriptions;

    @Column(name = "pods")
    private String pods;

    @Column(name = "applications")
    private String applications;

    @Column(name = "tenant")
    private String tenant;

    @Column(name = "stage")
    private String stage;

    @ManyToOne
    private Application deploymentToApplications;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescriptions() {
        return descriptions;
    }

    public Deployment descriptions(String descriptions) {
        this.descriptions = descriptions;
        return this;
    }

    public void setDescriptions(String descriptions) {
        this.descriptions = descriptions;
    }

    public String getPods() {
        return pods;
    }

    public Deployment pods(String pods) {
        this.pods = pods;
        return this;
    }

    public void setPods(String pods) {
        this.pods = pods;
    }

    public String getApplications() {
        return applications;
    }

    public Deployment applications(String applications) {
        this.applications = applications;
        return this;
    }

    public void setApplications(String applications) {
        this.applications = applications;
    }

    public String getTenant() {
        return tenant;
    }

    public Deployment tenant(String tenant) {
        this.tenant = tenant;
        return this;
    }

    public void setTenant(String tenant) {
        this.tenant = tenant;
    }

    public String getStage() {
        return stage;
    }

    public Deployment stage(String stage) {
        this.stage = stage;
        return this;
    }

    public void setStage(String stage) {
        this.stage = stage;
    }

    public Application getDeploymentToApplications() {
        return deploymentToApplications;
    }

    public Deployment deploymentToApplications(Application application) {
        this.deploymentToApplications = application;
        return this;
    }

    public void setDeploymentToApplications(Application application) {
        this.deploymentToApplications = application;
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
        Deployment deployment = (Deployment) o;
        if (deployment.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), deployment.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Deployment{" +
            "id=" + getId() +
            ", descriptions='" + getDescriptions() + "'" +
            ", pods='" + getPods() + "'" +
            ", applications='" + getApplications() + "'" +
            ", tenant='" + getTenant() + "'" +
            ", stage='" + getStage() + "'" +
            "}";
    }
}
