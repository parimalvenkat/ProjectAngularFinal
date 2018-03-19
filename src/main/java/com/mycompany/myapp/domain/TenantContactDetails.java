package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A TenantContactDetails.
 */
@Entity
@Table(name = "tenant_contact_details")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class TenantContactDetails implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "e_mail")
    private String eMail;

    @Column(name = "mobile_number")
    private Long mobileNumber;

    @Column(name = "country")
    private String country;

    @ManyToOne
    private TenantDetails tenantDetails;

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

    public TenantContactDetails name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String geteMail() {
        return eMail;
    }

    public TenantContactDetails eMail(String eMail) {
        this.eMail = eMail;
        return this;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    public Long getMobileNumber() {
        return mobileNumber;
    }

    public TenantContactDetails mobileNumber(Long mobileNumber) {
        this.mobileNumber = mobileNumber;
        return this;
    }

    public void setMobileNumber(Long mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getCountry() {
        return country;
    }

    public TenantContactDetails country(String country) {
        this.country = country;
        return this;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public TenantDetails getTenantDetails() {
        return tenantDetails;
    }

    public TenantContactDetails tenantDetails(TenantDetails tenantDetails) {
        this.tenantDetails = tenantDetails;
        return this;
    }

    public void setTenantDetails(TenantDetails tenantDetails) {
        this.tenantDetails = tenantDetails;
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
        TenantContactDetails tenantContactDetails = (TenantContactDetails) o;
        if (tenantContactDetails.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), tenantContactDetails.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "TenantContactDetails{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", eMail='" + geteMail() + "'" +
            ", mobileNumber=" + getMobileNumber() +
            ", country='" + getCountry() + "'" +
            "}";
    }
}
