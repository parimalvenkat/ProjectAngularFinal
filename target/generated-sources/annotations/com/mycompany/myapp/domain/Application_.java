package com.mycompany.myapp.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Application.class)
public abstract class Application_ {

	public static volatile SingularAttribute<Application, Integer> memory;
	public static volatile SetAttribute<Application, Image> applicationToImages;
	public static volatile SingularAttribute<Application, ZonedDateTime> created;
	public static volatile SingularAttribute<Application, String> description;
	public static volatile SingularAttribute<Application, Integer> numberOfCores;
	public static volatile SingularAttribute<Application, String> secret;
	public static volatile SingularAttribute<Application, String> version;
	public static volatile SingularAttribute<Application, String> numberOfInstances;
	public static volatile SingularAttribute<Application, String> name;
	public static volatile SingularAttribute<Application, byte[]> logo;
	public static volatile SingularAttribute<Application, String> logoContentType;
	public static volatile SingularAttribute<Application, Long> id;
	public static volatile SingularAttribute<Application, ZonedDateTime> updated;
	public static volatile SingularAttribute<Application, String> containerImage;
	public static volatile SetAttribute<Application, InboundOutbound> applicationToInOutbounds;

}

