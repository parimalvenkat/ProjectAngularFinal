/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Try1TestModule } from '../../../test.module';
import { TenantDetailsComponent } from '../../../../../../main/webapp/app/entities/tenant-details/tenant-details.component';
import { TenantDetailsService } from '../../../../../../main/webapp/app/entities/tenant-details/tenant-details.service';
import { TenantDetails } from '../../../../../../main/webapp/app/entities/tenant-details/tenant-details.model';

describe('Component Tests', () => {

    describe('TenantDetails Management Component', () => {
        let comp: TenantDetailsComponent;
        let fixture: ComponentFixture<TenantDetailsComponent>;
        let service: TenantDetailsService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [TenantDetailsComponent],
                providers: [
                    TenantDetailsService
                ]
            })
            .overrideTemplate(TenantDetailsComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TenantDetailsComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TenantDetailsService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new TenantDetails(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.tenantDetails[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
