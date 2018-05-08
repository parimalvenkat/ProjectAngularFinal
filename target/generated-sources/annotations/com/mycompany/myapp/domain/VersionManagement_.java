package com.mycompany.myapp.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(VersionManagement.class)
public abstract class VersionManagement_ {

	public static volatile SingularAttribute<VersionManagement, Deployment> deployments;
	public static volatile SingularAttribute<VersionManagement, String> action;
	public static volatile SingularAttribute<VersionManagement, Long> id;
	public static volatile SingularAttribute<VersionManagement, String> version;

}

