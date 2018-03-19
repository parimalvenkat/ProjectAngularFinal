package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Repositories.
 */
@Entity
@Table(name = "repositories")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Repositories implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "protocol")
    private String protocol;

    @Column(name = "hostname")
    private String hostname;

    @Column(name = "port")
    private Long port;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "jhi_password")
    private String password;

    @Column(name = "secret")
    private String secret;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProtocol() {
        return protocol;
    }

    public Repositories protocol(String protocol) {
        this.protocol = protocol;
        return this;
    }

    public void setProtocol(String protocol) {
        this.protocol = protocol;
    }

    public String getHostname() {
        return hostname;
    }

    public Repositories hostname(String hostname) {
        this.hostname = hostname;
        return this;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }

    public Long getPort() {
        return port;
    }

    public Repositories port(Long port) {
        this.port = port;
        return this;
    }

    public void setPort(Long port) {
        this.port = port;
    }

    public String getUserName() {
        return userName;
    }

    public Repositories userName(String userName) {
        this.userName = userName;
        return this;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public Repositories password(String password) {
        this.password = password;
        return this;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSecret() {
        return secret;
    }

    public Repositories secret(String secret) {
        this.secret = secret;
        return this;
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
        Repositories repositories = (Repositories) o;
        if (repositories.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), repositories.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Repositories{" +
            "id=" + getId() +
            ", protocol='" + getProtocol() + "'" +
            ", hostname='" + getHostname() + "'" +
            ", port=" + getPort() +
            ", userName='" + getUserName() + "'" +
            ", password='" + getPassword() + "'" +
            ", secret='" + getSecret() + "'" +
            "}";
    }
}
