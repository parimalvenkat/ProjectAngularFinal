/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { Try1TestModule } from '../../../test.module';
import { InboundOutboundDetailComponent } from '../../../../../../main/webapp/app/entities/inbound-outbound/inbound-outbound-detail.component';
import { InboundOutboundService } from '../../../../../../main/webapp/app/entities/inbound-outbound/inbound-outbound.service';
import { InboundOutbound } from '../../../../../../main/webapp/app/entities/inbound-outbound/inbound-outbound.model';

describe('Component Tests', () => {

    describe('InboundOutbound Management Detail Component', () => {
        let comp: InboundOutboundDetailComponent;
        let fixture: ComponentFixture<InboundOutboundDetailComponent>;
        let service: InboundOutboundService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [InboundOutboundDetailComponent],
                providers: [
                    InboundOutboundService
                ]
            })
            .overrideTemplate(InboundOutboundDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(InboundOutboundDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(InboundOutboundService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new InboundOutbound(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.inboundOutbound).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
