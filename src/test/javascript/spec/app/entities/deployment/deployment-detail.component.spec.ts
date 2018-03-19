/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { Try1TestModule } from '../../../test.module';
import { DeploymentDetailComponent } from '../../../../../../main/webapp/app/entities/deployment/deployment-detail.component';
import { DeploymentService } from '../../../../../../main/webapp/app/entities/deployment/deployment.service';
import { Deployment } from '../../../../../../main/webapp/app/entities/deployment/deployment.model';

describe('Component Tests', () => {

    describe('Deployment Management Detail Component', () => {
        let comp: DeploymentDetailComponent;
        let fixture: ComponentFixture<DeploymentDetailComponent>;
        let service: DeploymentService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [DeploymentDetailComponent],
                providers: [
                    DeploymentService
                ]
            })
            .overrideTemplate(DeploymentDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DeploymentDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DeploymentService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new Deployment(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.deployment).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
