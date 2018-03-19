import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { RepositoriesComponent } from './repositories.component';
import { RepositoriesDetailComponent } from './repositories-detail.component';
import { RepositoriesPopupComponent } from './repositories-dialog.component';
import { RepositoriesDeletePopupComponent } from './repositories-delete-dialog.component';

export const repositoriesRoute: Routes = [
    {
        path: 'repositories',
        component: RepositoriesComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Repositories'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'repositories/:id',
        component: RepositoriesDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Repositories'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const repositoriesPopupRoute: Routes = [
    {
        path: 'repositories-new',
        component: RepositoriesPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Repositories'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'repositories/:id/edit',
        component: RepositoriesPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Repositories'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'repositories/:id/delete',
        component: RepositoriesDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Repositories'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
