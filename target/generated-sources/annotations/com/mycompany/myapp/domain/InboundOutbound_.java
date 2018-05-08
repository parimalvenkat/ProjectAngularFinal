package com.mycompany.myapp.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(InboundOutbound.class)
public abstract class InboundOutbound_ {

	public static volatile SingularAttribute<InboundOutbound, String> protocol;
	public static volatile SingularAttribute<InboundOutbound, Application> application;
	public static volatile SingularAttribute<InboundOutbound, Long> inbound;
	public static volatile SingularAttribute<InboundOutbound, Long> outbound;
	public static volatile SingularAttribute<InboundOutbound, Long> id;

}

