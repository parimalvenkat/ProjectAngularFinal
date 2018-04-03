import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { ScaleManagementComponent } from './scale-management.component';
import { ScaleManagementDetailComponent } from './scale-management-detail.component';
import { ScaleManagementPopupComponent } from './scale-management-dialog.component';
import { ScaleManagementDeletePopupComponent } from './scale-management-delete-dialog.component';

export const scaleManagementRoute: Routes = [
    {
        path: 'scale-management',
        component: ScaleManagementComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'optimizerApp.scaleManagement.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'scale-management/:id',
        component: ScaleManagementDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'optimizerApp.scaleManagement.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const scaleManagementPopupRoute: Routes = [
    {
        path: 'scale-management-new',
        component: ScaleManagementPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'optimizerApp.scaleManagement.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'scale-management/:id/edit',
        component: ScaleManagementPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'optimizerApp.scaleManagement.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'scale-management/:id/delete',
        component: ScaleManagementDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'optimizerApp.scaleManagement.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
