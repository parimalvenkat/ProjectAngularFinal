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
 * A TenantDetails.
 */
@Entity
@Table(name = "tenant_details")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class TenantDetails implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "CONTACT_NAME")
    private String contactname;

    @Column(name = "CONTACT_EMAIL")
    private String contactemail;

    @OneToMany(mappedBy = "tenantDetails")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Stages> tenantDetialsToStages = new HashSet<>();

    @OneToMany(mappedBy = "tenantDetails")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<TenantContactDetails> tenantDetailsToTenantContactdetails = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "tenant_details_tenant_details_to_stages",
               joinColumns = @JoinColumn(name="tenant_details_id", referencedColumnName="id"),
               inverseJoinColumns = @JoinColumn(name="tenant_details_to_stages_id", referencedColumnName="id"))
    private Set<Stages> tenantDetailsToStages = new HashSet<>();

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

    public TenantDetails name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public TenantDetails description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getContactname() {
        return contactname;
    }

    public TenantDetails contactname(String contactname) {
        this.contactname = contactname;
        return this;
    }

    public void setContactname(String contactname) {
        this.contactname = contactname;
    }

    public String getContactemail() {
        return contactemail;
    }

    public TenantDetails contactemail(String contactemail) {
        this.contactemail = contactemail;
        return this;
    }

    public void setContactemail(String contactemail) {
        this.contactemail = contactemail;
    }

    public Set<Stages> getTenantDetialsToStages() {
        return tenantDetialsToStages;
    }

    public TenantDetails tenantDetialsToStages(Set<Stages> stages) {
        this.tenantDetialsToStages = stages;
        return this;
    }

    public TenantDetails addTenantDetialsToStages(Stages stages) {
        this.tenantDetialsToStages.add(stages);
        stages.setTenantDetails(this);
        return this;
    }

    public TenantDetails removeTenantDetialsToStages(Stages stages) {
        this.tenantDetialsToStages.remove(stages);
        stages.setTenantDetails(null);
        return this;
    }

    public void setTenantDetialsToStages(Set<Stages> stages) {
        this.tenantDetialsToStages = stages;
    }

    public Set<TenantContactDetails> getTenantDetailsToTenantContactdetails() {
        return tenantDetailsToTenantContactdetails;
    }

    public TenantDetails tenantDetailsToTenantContactdetails(Set<TenantContactDetails> tenantContactDetails) {
        this.tenantDetailsToTenantContactdetails = tenantContactDetails;
        return this;
    }

    public TenantDetails addTenantDetailsToTenantContactdetails(TenantContactDetails tenantContactDetails) {
        this.tenantDetailsToTenantContactdetails.add(tenantContactDetails);
        tenantContactDetails.setTenantDetails(this);
        return this;
    }

    public TenantDetails removeTenantDetailsToTenantContactdetails(TenantContactDetails tenantContactDetails) {
        this.tenantDetailsToTenantContactdetails.remove(tenantContactDetails);
        tenantContactDetails.setTenantDetails(null);
        return this;
    }

    public void setTenantDetailsToTenantContactdetails(Set<TenantContactDetails> tenantContactDetails) {
        this.tenantDetailsToTenantContactdetails = tenantContactDetails;
    }

    public Set<Stages> getTenantDetailsToStages() {
        return tenantDetailsToStages;
    }

    public TenantDetails tenantDetailsToStages(Set<Stages> stages) {
        this.tenantDetailsToStages = stages;
        return this;
    }

    public TenantDetails addTenantDetailsToStages(Stages stages) {
        this.tenantDetailsToStages.add(stages);
        return this;
    }

    public TenantDetails removeTenantDetailsToStages(Stages stages) {
        this.tenantDetailsToStages.remove(stages);
        return this;
    }

    public void setTenantDetailsToStages(Set<Stages> stages) {
        this.tenantDetailsToStages = stages;
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
        TenantDetails tenantDetails = (TenantDetails) o;
        if (tenantDetails.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), tenantDetails.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "TenantDetails{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", description='" + getDescription() + "'" +
            ", contactname='" + getContactname() + "'" +
            ", contactemail='" + getContactemail() + "'" +
            "}";
    }
}
