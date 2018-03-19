/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Try1TestModule } from '../../../test.module';
import { TenantContactDetailsComponent } from '../../../../../../main/webapp/app/entities/tenant-contact-details/tenant-contact-details.component';
import { TenantContactDetailsService } from '../../../../../../main/webapp/app/entities/tenant-contact-details/tenant-contact-details.service';
import { TenantContactDetails } from '../../../../../../main/webapp/app/entities/tenant-contact-details/tenant-contact-details.model';

describe('Component Tests', () => {

    describe('TenantContactDetails Management Component', () => {
        let comp: TenantContactDetailsComponent;
        let fixture: ComponentFixture<TenantContactDetailsComponent>;
        let service: TenantContactDetailsService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [TenantContactDetailsComponent],
                providers: [
                    TenantContactDetailsService
                ]
            })
            .overrideTemplate(TenantContactDetailsComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TenantContactDetailsComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TenantContactDetailsService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new TenantContactDetails(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.tenantContactDetails[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
