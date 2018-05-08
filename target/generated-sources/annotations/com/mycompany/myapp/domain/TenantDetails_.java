package com.mycompany.myapp.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(TenantDetails.class)
public abstract class TenantDetails_ {

	public static volatile SingularAttribute<TenantDetails, String> contactname;
	public static volatile SingularAttribute<TenantDetails, String> contactemail;
	public static volatile SetAttribute<TenantDetails, Stages> tenantDetialsToStages;
	public static volatile SetAttribute<TenantDetails, TenantContactDetails> tenantDetailsToTenantContactdetails;
	public static volatile SingularAttribute<TenantDetails, String> name;
	public static volatile SingularAttribute<TenantDetails, String> description;
	public static volatile SetAttribute<TenantDetails, Stages> tenantDetailsToStages;
	public static volatile SingularAttribute<TenantDetails, Long> id;

}

