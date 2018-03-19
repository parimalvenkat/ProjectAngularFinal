import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { DeploymentComponent } from './deployment.component';
import { DeploymentDetailComponent } from './deployment-detail.component';
import { DeploymentPopupComponent } from './deployment-dialog.component';
import { DeploymentDeletePopupComponent } from './deployment-delete-dialog.component';

export const deploymentRoute: Routes = [
    {
        path: 'deployment',
        component: DeploymentComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Deployments'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'deployment/:id',
        component: DeploymentDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Deployments'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const deploymentPopupRoute: Routes = [
    {
        path: 'deployment-new',
        component: DeploymentPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Deployments'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'deployment/:id/edit',
        component: DeploymentPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Deployments'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'deployment/:id/delete',
        component: DeploymentDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Deployments'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
