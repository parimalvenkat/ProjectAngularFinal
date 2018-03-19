import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { TenantDetailsComponent } from './tenant-details.component';
import { TenantDetailsDetailComponent } from './tenant-details-detail.component';
import { TenantDetailsPopupComponent } from './tenant-details-dialog.component';
import { TenantDetailsDeletePopupComponent } from './tenant-details-delete-dialog.component';

export const tenantDetailsRoute: Routes = [
    {
        path: 'tenant-details',
        component: TenantDetailsComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TenantDetails'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'tenant-details/:id',
        component: TenantDetailsDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TenantDetails'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const tenantDetailsPopupRoute: Routes = [
    {
        path: 'tenant-details-new',
        component: TenantDetailsPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TenantDetails'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tenant-details/:id/edit',
        component: TenantDetailsPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TenantDetails'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tenant-details/:id/delete',
        component: TenantDetailsDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TenantDetails'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
