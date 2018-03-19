import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { TenantDeploymentComponent } from './tenant-deployment.component';
import { TenantDeploymentDetailComponent } from './tenant-deployment-detail.component';
import { TenantDeploymentPopupComponent } from './tenant-deployment-dialog.component';
import { TenantDeploymentDeletePopupComponent } from './tenant-deployment-delete-dialog.component';

export const tenantDeploymentRoute: Routes = [
    {
        path: 'tenant-deployment',
        component: TenantDeploymentComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TenantDeployments'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'tenant-deployment/:id',
        component: TenantDeploymentDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TenantDeployments'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const tenantDeploymentPopupRoute: Routes = [
    {
        path: 'tenant-deployment-new',
        component: TenantDeploymentPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TenantDeployments'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tenant-deployment/:id/edit',
        component: TenantDeploymentPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TenantDeployments'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tenant-deployment/:id/delete',
        component: TenantDeploymentDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TenantDeployments'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
