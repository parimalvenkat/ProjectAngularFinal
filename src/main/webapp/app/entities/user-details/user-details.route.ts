import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { UserDetailsComponent } from './user-details.component';
import { UserDetailsDetailComponent } from './user-details-detail.component';
import { UserDetailsPopupComponent } from './user-details-dialog.component';
import { UserDetailsDeletePopupComponent } from './user-details-delete-dialog.component';

export const userDetailsRoute: Routes = [
    {
        path: 'user-details',
        component: UserDetailsComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'UserDetails'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'user-details/:id',
        component: UserDetailsDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'UserDetails'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const userDetailsPopupRoute: Routes = [
    {
        path: 'user-details-new',
        component: UserDetailsPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'UserDetails'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'user-details/:id/edit',
        component: UserDetailsPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'UserDetails'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'user-details/:id/delete',
        component: UserDetailsDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'UserDetails'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
