package com.mycompany.myapp.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Deployment.class)
public abstract class Deployment_ {

	public static volatile SingularAttribute<Deployment, Application> deploymentToApplications;
	public static volatile SingularAttribute<Deployment, String> stage;
	public static volatile SingularAttribute<Deployment, String> pods;
	public static volatile SingularAttribute<Deployment, Long> id;
	public static volatile SingularAttribute<Deployment, String> descriptions;
	public static volatile SingularAttribute<Deployment, String> tenant;
	public static volatile SingularAttribute<Deployment, String> applications;

}

