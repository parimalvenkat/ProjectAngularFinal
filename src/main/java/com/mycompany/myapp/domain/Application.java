package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
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

    @NotNull
    @Size(min = 5, max = 20)
    @Column(name = "name", length = 20, nullable = false)
    private String name;

    @NotNull
    @Size(min = 10, max = 700)
    @Column(name = "description", length = 700, nullable = false)
    private String description;


    @Column(name = "created")
    private ZonedDateTime created;

    @Column(name = "updated")
    private ZonedDateTime updated;

    @Column(name = "version")
    private String version;

    @Lob
    @Column(name = "logo")
    private byte[] logo;

    @Column(name = "logo_content_type")
    private String logoContentType;

    @NotNull
    @Column(name = "container_image", nullable = false)
    private String containerImage;

    @NotNull
    @Column(name = "number_of_instances", nullable = false)
    private String numberOfInstances;


    @Column(name = "number_of_cores")
    private Integer numberOfCores;

    @Column(name = "memory")
    private Integer memory;


    @Column(name = "secret")
    private String secret;
// adding application to image

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
//=================================/////////////

    //@OneToMany(cascade = CascadeType.ALL, mappedBy = "applications")
    private transient Set<InboundOutbound> inboundOutbound = new HashSet<>();

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

    public void setInboundOutboundPorts(Set<InboundOutbound> data){
        System.out.println("----------------------------------------");
        System.out.println(data);
        System.out.println("----------------------------------------");
        this.inboundOutbound = data;
    }

    public Set<InboundOutbound> getInboundOutboundPorts(){
        return this.inboundOutbound;
    }

    public Application inboundOutboundPorts(Set<InboundOutbound> inboundOutboundPorts){
        this.inboundOutbound = inboundOutboundPorts;
        return  this;
    }

    public Application addInboundOutboundPorts(InboundOutbound inboundOutboundPorts){
        this.inboundOutbound.add(inboundOutboundPorts);
        inboundOutboundPorts.setApplications(this);
        return  this;

    }
    public Application removeInboundOutboundPorts(InboundOutbound inboundOutboundPorts){
        this.inboundOutbound.remove(inboundOutboundPorts);
        inboundOutboundPorts.setApplications(null);
        return this;
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

    public String getVersion() {
        return version;
    }

    public Application version(String version) {
        this.version = version;
        return this;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    //addin application to image

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
    //the end



    public byte[] getLogo() {
        return logo;
    }

    public Application logo(byte[] logo) {
        this.logo = logo;
        return this;
    }

    public void setLogo(byte[] logo) {
        this.logo = logo;
    }

    public String getLogoContentType() {
        return logoContentType;
    }

    public Application logoContentType(String logoContentType) {
        this.logoContentType = logoContentType;
        return this;
    }

    public void setLogoContentType(String logoContentType) {
        this.logoContentType = logoContentType;
    }

    public String getContainerImage() {
        return containerImage;
    }

    public void setContainerImage(String containerImage) {
        this.containerImage = containerImage;
    }

    public String getNumberOfInstances() {
        return numberOfInstances;
    }

    public void setNumberOfInstances(String numberOfInstances) {
        this.numberOfInstances = numberOfInstances;
    }

    public Integer getNumberOfCores() {
        return numberOfCores;
    }

    public void setNumberOfCores(Integer numberOfCores) {
        this.numberOfCores = numberOfCores;
    }

    public Integer getMemory() {
        return memory;
    }

    public void setMemory(Integer memory) {
        this.memory = memory;
    }

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
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
        Application applications = (Application) o;
        if (applications.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), applications.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Applications{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", description='" + getDescription() + "'" +
            ", created='" + getCreated() + "'" +
            ", updated='" + getUpdated() + "'" +
            ", version='" + getVersion() + "'" +
            ", logo='" + getLogo() + "'" +
            ", logoContentType='" + getLogoContentType()+ "'" +
            ", container_image='" + getContainerImage() + "'" +
            ", number_of_instances='" + getNumberOfInstances()+ "'" +
            ", number_of_cores='" + getNumberOfCores()+ "'" +
            ", memory='" + getMemory()+ "'" +
            ",secret='" + getSecret()+ "'" +

            "}";
    }
}
