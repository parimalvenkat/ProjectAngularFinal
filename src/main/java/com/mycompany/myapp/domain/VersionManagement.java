package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Objects;

/**
 * A VersionManagement.
 */
@Entity
@Table(name = "version_management")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class VersionManagement implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "version", nullable = false)
    private String version;

    @Column(name = "action")
    private String action;

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

    public String getVersion() {
        return version;
    }

    public VersionManagement version(String version) {
        this.version = version;
        return this;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getAction() {
        return action;
    }

    public VersionManagement action(String action) {
        this.action = action;
        return this;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public Deployment getDeployments() {
        return deployments;
    }

    public VersionManagement deployments(Deployment deployments) {
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
        VersionManagement versionManagement = (VersionManagement) o;
        if (versionManagement.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), versionManagement.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "VersionManagement{" +
            "id=" + getId() +
            ", version='" + getVersion() + "'" +
            ", action='" + getAction() + "'" +
            "}";
    }
}
