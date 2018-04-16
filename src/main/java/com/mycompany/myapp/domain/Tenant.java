package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Tenant.
 */
@Entity
@Table(name = "tenant")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Tenant implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "contact_name")
    private String contact_name;

    @Column(name = "contact_email")
    private String contact_email;

    @OneToMany(mappedBy = "tenant")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Stages> stages = new HashSet<>();

    @ManyToMany(mappedBy = "tenants")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Stages> ys = new HashSet<>();

    @OneToMany(mappedBy = "tenant")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<N> ns = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Tenant name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public Tenant description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getContact_name() {
        return contact_name;
    }

    public Tenant contact_name(String contact_name) {
        this.contact_name = contact_name;
        return this;
    }

    public void setContact_name(String contact_name) {
        this.contact_name = contact_name;
    }

    public String getContact_email() {
        return contact_email;
    }

    public Tenant contact_email(String contact_email) {
        this.contact_email = contact_email;
        return this;
    }

    public void setContact_email(String contact_email) {
        this.contact_email = contact_email;
    }

    public Set<Stages> getStages() {
        return stages;
    }

    public Tenant stages(Set<Stages> stages) {
        this.stages = stages;
        return this;
    }

    public Tenant addStages(Stages stages) {
        this.stages.add(stages);
        stages.setTenant(this);
        return this;
    }

    public Tenant removeStages(Stages stages) {
        this.stages.remove(stages);
        stages.setTenant(null);
        return this;
    }

    public void setStages(Set<Stages> stages) {
        this.stages = stages;
    }

    public Set<Stages> getYs() {
        return ys;
    }

    public Tenant ys(Set<Stages> stages) {
        this.ys = stages;
        return this;
    }

    public Tenant addY(Stages stages) {
        this.ys.add(stages);
        stages.getTenants().add(this);
        return this;
    }

    public Tenant removeY(Stages stages) {
        this.ys.remove(stages);
        stages.getTenants().remove(this);
        return this;
    }

    public void setYs(Set<Stages> stages) {
        this.ys = stages;
    }

    public Set<N> getNs() {
        return ns;
    }

    public Tenant ns(Set<N> ns) {
        this.ns = ns;
        return this;
    }

    public Tenant addN(N n) {
        this.ns.add(n);
        n.setTenant(this);
        return this;
    }

    public Tenant removeN(N n) {
        this.ns.remove(n);
        n.setTenant(null);
        return this;
    }

    public void setNs(Set<N> ns) {
        this.ns = ns;
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
        Tenant tenant = (Tenant) o;
        if (tenant.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), tenant.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Tenant{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", description='" + getDescription() + "'" +
            ", contact_name='" + getContact_name() + "'" +
            ", contact_email='" + getContact_email() + "'" +
            "}";
    }
}
