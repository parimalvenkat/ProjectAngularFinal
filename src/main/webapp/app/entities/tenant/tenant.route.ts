import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from '../../shared';
import { TenantComponent } from './tenant.component';
import { TenantDetailComponent } from './tenant-detail.component';
import { TenantPopupComponent } from './tenant-dialog.component';
import { TenantDeletePopupComponent } from './tenant-delete-dialog.component';

@Injectable()
export class TenantResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const tenantRoute: Routes = [
    {
        path: 'tenant',
        component: TenantComponent,
        resolve: {
            'pagingParams': TenantResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tenants'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'tenant/:id',
        component: TenantDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tenants'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const tenantPopupRoute: Routes = [
    {
        path: 'tenant-new',
        component: TenantPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tenants'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tenant/:id/edit',
        component: TenantPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tenants'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tenant/:id/delete',
        component: TenantDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tenants'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
