package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Application.
 */
@Entity
@Table(name = "application")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Application implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "created")
    private ZonedDateTime created;

    @Column(name = "updated")
    private ZonedDateTime updated;

    @Column(name = "version")
    private Long version;

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "application_application_to_image",
               joinColumns = @JoinColumn(name="applications_id", referencedColumnName="id"),
               inverseJoinColumns = @JoinColumn(name="application_to_images_id", referencedColumnName="id"))
    private Set<Image> applicationToImages = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "application_application_to_in_outbound",
               joinColumns = @JoinColumn(name="applications_id", referencedColumnName="id"),
               inverseJoinColumns = @JoinColumn(name="application_to_in_outbounds_id", referencedColumnName="id"))
    private Set<InboundOutbound> applicationToInOutbounds = new HashSet<>();

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

    public Application name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public Application description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ZonedDateTime getCreated() {
        return created;
    }

    public Application created(ZonedDateTime created) {
        this.created = created;
        return this;
    }

    public void setCreated(ZonedDateTime created) {
        this.created = created;
    }

    public ZonedDateTime getUpdated() {
        return updated;
    }

    public Application updated(ZonedDateTime updated) {
        this.updated = updated;
        return this;
    }

    public void setUpdated(ZonedDateTime updated) {
        this.updated = updated;
    }

    public Long getVersion() {
        return version;
    }

    public Application version(Long version) {
        this.version = version;
        return this;
    }

    public void setVersion(Long version) {
        this.version = version;
    }

    public Set<Image> getApplicationToImages() {
        return applicationToImages;
    }

    public Application applicationToImages(Set<Image> images) {
        this.applicationToImages = images;
        return this;
    }

    public Application addApplicationToImage(Image image) {
        this.applicationToImages.add(image);
        return this;
    }

    public Application removeApplicationToImage(Image image) {
        this.applicationToImages.remove(image);
        return this;
    }

    public void setApplicationToImages(Set<Image> images) {
        this.applicationToImages = images;
    }

    public Set<InboundOutbound> getApplicationToInOutbounds() {
        return applicationToInOutbounds;
    }

    public Application applicationToInOutbounds(Set<InboundOutbound> inboundOutbounds) {
        this.applicationToInOutbounds = inboundOutbounds;
        return this;
    }

    public Application addApplicationToInOutbound(InboundOutbound inboundOutbound) {
        this.applicationToInOutbounds.add(inboundOutbound);
        return this;
    }

    public Application removeApplicationToInOutbound(InboundOutbound inboundOutbound) {
        this.applicationToInOutbounds.remove(inboundOutbound);
        return this;
    }

    public void setApplicationToInOutbounds(Set<InboundOutbound> inboundOutbounds) {
        this.applicationToInOutbounds = inboundOutbounds;
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
        Application application = (Application) o;
        if (application.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), application.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Application{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", description='" + getDescription() + "'" +
            ", created='" + getCreated() + "'" +
            ", updated='" + getUpdated() + "'" +
            ", version=" + getVersion() +
            "}";
    }
}
