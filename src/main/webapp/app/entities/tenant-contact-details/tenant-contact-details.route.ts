import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { TenantContactDetailsComponent } from './tenant-contact-details.component';
import { TenantContactDetailsDetailComponent } from './tenant-contact-details-detail.component';
import { TenantContactDetailsPopupComponent } from './tenant-contact-details-dialog.component';
import { TenantContactDetailsDeletePopupComponent } from './tenant-contact-details-delete-dialog.component';

export const tenantContactDetailsRoute: Routes = [
    {
        path: 'tenant-contact-details',
        component: TenantContactDetailsComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TenantContactDetails'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'tenant-contact-details/:id',
        component: TenantContactDetailsDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TenantContactDetails'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const tenantContactDetailsPopupRoute: Routes = [
    {
        path: 'tenant-contact-details-new',
        component: TenantContactDetailsPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TenantContactDetails'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tenant-contact-details/:id/edit',
        component: TenantContactDetailsPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TenantContactDetails'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tenant-contact-details/:id/delete',
        component: TenantContactDetailsDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'TenantContactDetails'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
