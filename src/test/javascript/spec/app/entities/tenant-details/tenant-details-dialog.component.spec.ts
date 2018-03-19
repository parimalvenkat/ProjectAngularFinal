/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Try1TestModule } from '../../../test.module';
import { TenantDetailsDialogComponent } from '../../../../../../main/webapp/app/entities/tenant-details/tenant-details-dialog.component';
import { TenantDetailsService } from '../../../../../../main/webapp/app/entities/tenant-details/tenant-details.service';
import { TenantDetails } from '../../../../../../main/webapp/app/entities/tenant-details/tenant-details.model';
import { StagesService } from '../../../../../../main/webapp/app/entities/stages';

describe('Component Tests', () => {

    describe('TenantDetails Management Dialog Component', () => {
        let comp: TenantDetailsDialogComponent;
        let fixture: ComponentFixture<TenantDetailsDialogComponent>;
        let service: TenantDetailsService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [TenantDetailsDialogComponent],
                providers: [
                    StagesService,
                    TenantDetailsService
                ]
            })
            .overrideTemplate(TenantDetailsDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TenantDetailsDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TenantDetailsService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new TenantDetails(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.tenantDetails = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'tenantDetailsListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new TenantDetails();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.tenantDetails = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'tenantDetailsListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
