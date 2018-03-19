import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { InboundOutboundComponent } from './inbound-outbound.component';
import { InboundOutboundDetailComponent } from './inbound-outbound-detail.component';
import { InboundOutboundPopupComponent } from './inbound-outbound-dialog.component';
import { InboundOutboundDeletePopupComponent } from './inbound-outbound-delete-dialog.component';

export const inboundOutboundRoute: Routes = [
    {
        path: 'inbound-outbound',
        component: InboundOutboundComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'InboundOutbounds'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'inbound-outbound/:id',
        component: InboundOutboundDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'InboundOutbounds'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const inboundOutboundPopupRoute: Routes = [
    {
        path: 'inbound-outbound-new',
        component: InboundOutboundPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'InboundOutbounds'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'inbound-outbound/:id/edit',
        component: InboundOutboundPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'InboundOutbounds'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'inbound-outbound/:id/delete',
        component: InboundOutboundDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'InboundOutbounds'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
