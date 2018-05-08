package com.mycompany.myapp.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(TenantDeployment.class)
public abstract class TenantDeployment_ {

	public static volatile SingularAttribute<TenantDeployment, TenantDetails> tenantDepoloymentToDetails;
	public static volatile SingularAttribute<TenantDeployment, Deployment> tenantDeploymentToDeployment;
	public static volatile SingularAttribute<TenantDeployment, Stages> tenantDeploymentToStages;
	public static volatile SingularAttribute<TenantDeployment, Long> id;

}

