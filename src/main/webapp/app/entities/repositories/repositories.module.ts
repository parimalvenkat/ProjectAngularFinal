import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Try1SharedModule } from '../../shared';
import {
    RepositoriesService,
    RepositoriesPopupService,
    RepositoriesComponent,
    RepositoriesDetailComponent,
    RepositoriesDialogComponent,
    RepositoriesPopupComponent,
    RepositoriesDeletePopupComponent,
    RepositoriesDeleteDialogComponent,
    repositoriesRoute,
    repositoriesPopupRoute,
} from './';

const ENTITY_STATES = [
    ...repositoriesRoute,
    ...repositoriesPopupRoute,
];

@NgModule({
    imports: [
        Try1SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        RepositoriesComponent,
        RepositoriesDetailComponent,
        RepositoriesDialogComponent,
        RepositoriesDeleteDialogComponent,
        RepositoriesPopupComponent,
        RepositoriesDeletePopupComponent,
    ],
    entryComponents: [
        RepositoriesComponent,
        RepositoriesDialogComponent,
        RepositoriesPopupComponent,
        RepositoriesDeleteDialogComponent,
        RepositoriesDeletePopupComponent,
    ],
    providers: [
        RepositoriesService,
        RepositoriesPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Try1RepositoriesModule {}
