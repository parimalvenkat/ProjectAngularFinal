/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Try1TestModule } from '../../../test.module';
import { TenantContactDetailsDialogComponent } from '../../../../../../main/webapp/app/entities/tenant-contact-details/tenant-contact-details-dialog.component';
import { TenantContactDetailsService } from '../../../../../../main/webapp/app/entities/tenant-contact-details/tenant-contact-details.service';
import { TenantContactDetails } from '../../../../../../main/webapp/app/entities/tenant-contact-details/tenant-contact-details.model';
import { TenantDetailsService } from '../../../../../../main/webapp/app/entities/tenant-details';

describe('Component Tests', () => {

    describe('TenantContactDetails Management Dialog Component', () => {
        let comp: TenantContactDetailsDialogComponent;
        let fixture: ComponentFixture<TenantContactDetailsDialogComponent>;
        let service: TenantContactDetailsService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [TenantContactDetailsDialogComponent],
                providers: [
                    TenantDetailsService,
                    TenantContactDetailsService
                ]
            })
            .overrideTemplate(TenantContactDetailsDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TenantContactDetailsDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TenantContactDetailsService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new TenantContactDetails(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.tenantContactDetails = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'tenantContactDetailsListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new TenantContactDetails();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.tenantContactDetails = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'tenantContactDetailsListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
