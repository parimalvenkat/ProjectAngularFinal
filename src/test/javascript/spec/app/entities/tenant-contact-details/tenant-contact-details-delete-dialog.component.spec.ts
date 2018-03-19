/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Try1TestModule } from '../../../test.module';
import { TenantContactDetailsDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/tenant-contact-details/tenant-contact-details-delete-dialog.component';
import { TenantContactDetailsService } from '../../../../../../main/webapp/app/entities/tenant-contact-details/tenant-contact-details.service';

describe('Component Tests', () => {

    describe('TenantContactDetails Management Delete Component', () => {
        let comp: TenantContactDetailsDeleteDialogComponent;
        let fixture: ComponentFixture<TenantContactDetailsDeleteDialogComponent>;
        let service: TenantContactDetailsService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [TenantContactDetailsDeleteDialogComponent],
                providers: [
                    TenantContactDetailsService
                ]
            })
            .overrideTemplate(TenantContactDetailsDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TenantContactDetailsDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TenantContactDetailsService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
