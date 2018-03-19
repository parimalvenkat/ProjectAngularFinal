/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { Try1TestModule } from '../../../test.module';
import { TenantContactDetailsDetailComponent } from '../../../../../../main/webapp/app/entities/tenant-contact-details/tenant-contact-details-detail.component';
import { TenantContactDetailsService } from '../../../../../../main/webapp/app/entities/tenant-contact-details/tenant-contact-details.service';
import { TenantContactDetails } from '../../../../../../main/webapp/app/entities/tenant-contact-details/tenant-contact-details.model';

describe('Component Tests', () => {

    describe('TenantContactDetails Management Detail Component', () => {
        let comp: TenantContactDetailsDetailComponent;
        let fixture: ComponentFixture<TenantContactDetailsDetailComponent>;
        let service: TenantContactDetailsService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [TenantContactDetailsDetailComponent],
                providers: [
                    TenantContactDetailsService
                ]
            })
            .overrideTemplate(TenantContactDetailsDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TenantContactDetailsDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TenantContactDetailsService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new TenantContactDetails(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.tenantContactDetails).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
