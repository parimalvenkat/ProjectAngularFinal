package com.mycompany.myapp.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Tenants.class)
public abstract class Tenants_ {

	public static volatile SingularAttribute<Tenants, String> contact_name;
	public static volatile SetAttribute<Tenants, Tenant_contact_details> tenant_contact_details;
	public static volatile SetAttribute<Tenants, Stages> ms;
	public static volatile SetAttribute<Tenants, Stages> men;
	public static volatile SingularAttribute<Tenants, String> name;
	public static volatile SetAttribute<Tenants, Stages> stages;
	public static volatile SingularAttribute<Tenants, String> description;
	public static volatile SingularAttribute<Tenants, Long> id;
	public static volatile SingularAttribute<Tenants, String> contact_email;

}

