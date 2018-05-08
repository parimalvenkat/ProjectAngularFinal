package com.mycompany.myapp.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Repositories.class)
public abstract class Repositories_ {

	public static volatile SingularAttribute<Repositories, String> protocol;
	public static volatile SingularAttribute<Repositories, String> hostname;
	public static volatile SingularAttribute<Repositories, String> password;
	public static volatile SingularAttribute<Repositories, Long> port;
	public static volatile SingularAttribute<Repositories, Long> id;
	public static volatile SingularAttribute<Repositories, String> secret;
	public static volatile SingularAttribute<Repositories, String> userName;

}

