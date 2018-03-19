package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A InboundOutbound.
 */
@Entity
@Table(name = "inbound_outbound")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class InboundOutbound implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "protocol")
    private String protocol;

    @Column(name = "inbound")
    private Long inbound;

    @Column(name = "outbound")
    private Long outbound;

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

    public InboundOutbound protocol(String protocol) {
        this.protocol = protocol;
        return this;
    }

    public void setProtocol(String protocol) {
        this.protocol = protocol;
    }

    public Long getInbound() {
        return inbound;
    }

    public InboundOutbound inbound(Long inbound) {
        this.inbound = inbound;
        return this;
    }

    public void setInbound(Long inbound) {
        this.inbound = inbound;
    }

    public Long getOutbound() {
        return outbound;
    }

    public InboundOutbound outbound(Long outbound) {
        this.outbound = outbound;
        return this;
    }

    public void setOutbound(Long outbound) {
        this.outbound = outbound;
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
        InboundOutbound inboundOutbound = (InboundOutbound) o;
        if (inboundOutbound.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), inboundOutbound.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "InboundOutbound{" +
            "id=" + getId() +
            ", protocol='" + getProtocol() + "'" +
            ", inbound=" + getInbound() +
            ", outbound=" + getOutbound() +
            "}";
    }
}
