/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Try1TestModule } from '../../../test.module';
import { RepositoriesDialogComponent } from '../../../../../../main/webapp/app/entities/repositories/repositories-dialog.component';
import { RepositoriesService } from '../../../../../../main/webapp/app/entities/repositories/repositories.service';
import { Repositories } from '../../../../../../main/webapp/app/entities/repositories/repositories.model';

describe('Component Tests', () => {

    describe('Repositories Management Dialog Component', () => {
        let comp: RepositoriesDialogComponent;
        let fixture: ComponentFixture<RepositoriesDialogComponent>;
        let service: RepositoriesService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [RepositoriesDialogComponent],
                providers: [
                    RepositoriesService
                ]
            })
            .overrideTemplate(RepositoriesDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(RepositoriesDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(RepositoriesService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Repositories(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.repositories = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'repositoriesListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Repositories();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.repositories = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'repositoriesListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
