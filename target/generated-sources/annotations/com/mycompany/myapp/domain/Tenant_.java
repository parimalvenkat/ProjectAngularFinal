package com.mycompany.myapp.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Tenant.class)
public abstract class Tenant_ {

	public static volatile SingularAttribute<Tenant, String> contact_name;
	public static volatile SingularAttribute<Tenant, String> name;
	public static volatile SetAttribute<Tenant, Stages> stages;
	public static volatile SingularAttribute<Tenant, String> description;
	public static volatile SingularAttribute<Tenant, Long> id;
	public static volatile SingularAttribute<Tenant, String> contact_email;

}

