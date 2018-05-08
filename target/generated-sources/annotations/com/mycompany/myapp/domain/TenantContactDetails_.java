package com.mycompany.myapp.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(TenantContactDetails.class)
public abstract class TenantContactDetails_ {

	public static volatile SingularAttribute<TenantContactDetails, String> country;
	public static volatile SingularAttribute<TenantContactDetails, Long> mobileNumber;
	public static volatile SingularAttribute<TenantContactDetails, TenantDetails> tenantDetails;
	public static volatile SingularAttribute<TenantContactDetails, String> name;
	public static volatile SingularAttribute<TenantContactDetails, Long> id;
	public static volatile SingularAttribute<TenantContactDetails, String> eMail;

}

