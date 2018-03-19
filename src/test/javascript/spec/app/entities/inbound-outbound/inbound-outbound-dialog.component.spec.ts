/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Try1TestModule } from '../../../test.module';
import { InboundOutboundDialogComponent } from '../../../../../../main/webapp/app/entities/inbound-outbound/inbound-outbound-dialog.component';
import { InboundOutboundService } from '../../../../../../main/webapp/app/entities/inbound-outbound/inbound-outbound.service';
import { InboundOutbound } from '../../../../../../main/webapp/app/entities/inbound-outbound/inbound-outbound.model';

describe('Component Tests', () => {

    describe('InboundOutbound Management Dialog Component', () => {
        let comp: InboundOutboundDialogComponent;
        let fixture: ComponentFixture<InboundOutboundDialogComponent>;
        let service: InboundOutboundService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [InboundOutboundDialogComponent],
                providers: [
                    InboundOutboundService
                ]
            })
            .overrideTemplate(InboundOutboundDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(InboundOutboundDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(InboundOutboundService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new InboundOutbound(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.inboundOutbound = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'inboundOutboundListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new InboundOutbound();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.inboundOutbound = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'inboundOutboundListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
