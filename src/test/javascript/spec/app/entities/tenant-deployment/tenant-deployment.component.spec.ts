/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Try1TestModule } from '../../../test.module';
import { TenantDeploymentComponent } from '../../../../../../main/webapp/app/entities/tenant-deployment/tenant-deployment.component';
import { TenantDeploymentService } from '../../../../../../main/webapp/app/entities/tenant-deployment/tenant-deployment.service';
import { TenantDeployment } from '../../../../../../main/webapp/app/entities/tenant-deployment/tenant-deployment.model';

describe('Component Tests', () => {

    describe('TenantDeployment Management Component', () => {
        let comp: TenantDeploymentComponent;
        let fixture: ComponentFixture<TenantDeploymentComponent>;
        let service: TenantDeploymentService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [TenantDeploymentComponent],
                providers: [
                    TenantDeploymentService
                ]
            })
            .overrideTemplate(TenantDeploymentComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TenantDeploymentComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TenantDeploymentService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new TenantDeployment(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.tenantDeployments[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
