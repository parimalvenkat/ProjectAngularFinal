/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Try1TestModule } from '../../../test.module';
import { InboundOutboundComponent } from '../../../../../../main/webapp/app/entities/inbound-outbound/inbound-outbound.component';
import { InboundOutboundService } from '../../../../../../main/webapp/app/entities/inbound-outbound/inbound-outbound.service';
import { InboundOutbound } from '../../../../../../main/webapp/app/entities/inbound-outbound/inbound-outbound.model';

describe('Component Tests', () => {

    describe('InboundOutbound Management Component', () => {
        let comp: InboundOutboundComponent;
        let fixture: ComponentFixture<InboundOutboundComponent>;
        let service: InboundOutboundService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [InboundOutboundComponent],
                providers: [
                    InboundOutboundService
                ]
            })
            .overrideTemplate(InboundOutboundComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(InboundOutboundComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(InboundOutboundService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new InboundOutbound(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.inboundOutbounds[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
