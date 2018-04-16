package com.mycompany.myapp.config;

import io.github.jhipster.config.JHipsterProperties;
import org.ehcache.config.builders.CacheConfigurationBuilder;
import org.ehcache.config.builders.ResourcePoolsBuilder;
import org.ehcache.expiry.Duration;
import org.ehcache.expiry.Expirations;
import org.ehcache.jsr107.Eh107Configuration;

import java.util.concurrent.TimeUnit;

import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
@AutoConfigureAfter(value = { MetricsConfiguration.class })
@AutoConfigureBefore(value = { WebConfigurer.class, DatabaseConfiguration.class })
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache =
            jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(Expirations.timeToLiveExpiration(Duration.of(ehcache.getTimeToLiveSeconds(), TimeUnit.SECONDS)))
                .build());
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            cm.createCache("users", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.User.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Authority.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.User.class.getName() + ".authorities", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Nodes.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Repositories.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.UserDetails.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.TenantDeployment.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.TenantDetails.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.TenantDetails.class.getName() + ".tenantDetialsToStages", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.TenantDetails.class.getName() + ".tenantDetailsToTenantContactdetails", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.TenantDetails.class.getName() + ".tenantDetailsToStages", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Deployment.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Stages.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.TenantContactDetails.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Application.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Application.class.getName() + ".applicationToImages", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Application.class.getName() + ".applicationToInOutbounds", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Image.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.InboundOutbound.class.getName(), jcacheConfiguration);
          
           
            cm.createCache(com.mycompany.myapp.domain.Tenant.class.getName(), jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Tenant.class.getName() + ".stages", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Tenant.class.getName() + ".ys", jcacheConfiguration);
            cm.createCache(com.mycompany.myapp.domain.Tenant.class.getName() + ".ns", jcacheConfiguration);
            // jhipster-needle-ehcache-add-entry
        };
    }
}
