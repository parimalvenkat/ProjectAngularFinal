/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Try1TestModule } from '../../../test.module';
import { InboundOutboundDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/inbound-outbound/inbound-outbound-delete-dialog.component';
import { InboundOutboundService } from '../../../../../../main/webapp/app/entities/inbound-outbound/inbound-outbound.service';

describe('Component Tests', () => {

    describe('InboundOutbound Management Delete Component', () => {
        let comp: InboundOutboundDeleteDialogComponent;
        let fixture: ComponentFixture<InboundOutboundDeleteDialogComponent>;
        let service: InboundOutboundService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [InboundOutboundDeleteDialogComponent],
                providers: [
                    InboundOutboundService
                ]
            })
            .overrideTemplate(InboundOutboundDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(InboundOutboundDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(InboundOutboundService);
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
