import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { StagesComponent } from './stages.component';
import { StagesDetailComponent } from './stages-detail.component';
import { StagesPopupComponent } from './stages-dialog.component';
import { StagesDeletePopupComponent } from './stages-delete-dialog.component';

export const stagesRoute: Routes = [
    {
        path: 'stages',
        component: StagesComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Stages'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'stages/:id',
        component: StagesDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Stages'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const stagesPopupRoute: Routes = [
    {
        path: 'stages-new',
        component: StagesPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Stages'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'stages/:id/edit',
        component: StagesPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Stages'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'stages/:id/delete',
        component: StagesDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Stages'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
