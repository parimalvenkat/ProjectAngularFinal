/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { Try1TestModule } from '../../../test.module';
import { TenantDeploymentDetailComponent } from '../../../../../../main/webapp/app/entities/tenant-deployment/tenant-deployment-detail.component';
import { TenantDeploymentService } from '../../../../../../main/webapp/app/entities/tenant-deployment/tenant-deployment.service';
import { TenantDeployment } from '../../../../../../main/webapp/app/entities/tenant-deployment/tenant-deployment.model';

describe('Component Tests', () => {

    describe('TenantDeployment Management Detail Component', () => {
        let comp: TenantDeploymentDetailComponent;
        let fixture: ComponentFixture<TenantDeploymentDetailComponent>;
        let service: TenantDeploymentService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [TenantDeploymentDetailComponent],
                providers: [
                    TenantDeploymentService
                ]
            })
            .overrideTemplate(TenantDeploymentDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TenantDeploymentDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TenantDeploymentService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new TenantDeployment(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.tenantDeployment).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
