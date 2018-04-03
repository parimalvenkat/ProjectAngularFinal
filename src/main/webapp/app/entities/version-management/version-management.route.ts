import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { VersionManagementComponent } from './version-management.component';
import { VersionManagementDetailComponent } from './version-management-detail.component';
import { VersionManagementPopupComponent } from './version-management-dialog.component';
import { VersionManagementDeletePopupComponent } from './version-management-delete-dialog.component';

export const versionManagementRoute: Routes = [
    {
        path: 'version-management',
        component: VersionManagementComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'optimizerApp.versionManagement.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'version-management/:id',
        component: VersionManagementDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'optimizerApp.versionManagement.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const versionManagementPopupRoute: Routes = [
    {
        path: 'version-management-new',
        component: VersionManagementPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'optimizerApp.versionManagement.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'version-management/:id/edit',
        component: VersionManagementPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'optimizerApp.versionManagement.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'version-management/:id/delete',
        component: VersionManagementDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'optimizerApp.versionManagement.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
