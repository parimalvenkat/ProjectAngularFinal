/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Try1TestModule } from '../../../test.module';
import { DeploymentComponent } from '../../../../../../main/webapp/app/entities/deployment/deployment.component';
import { DeploymentService } from '../../../../../../main/webapp/app/entities/deployment/deployment.service';
import { Deployment } from '../../../../../../main/webapp/app/entities/deployment/deployment.model';

describe('Component Tests', () => {

    describe('Deployment Management Component', () => {
        let comp: DeploymentComponent;
        let fixture: ComponentFixture<DeploymentComponent>;
        let service: DeploymentService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [DeploymentComponent],
                providers: [
                    DeploymentService
                ]
            })
            .overrideTemplate(DeploymentComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DeploymentComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DeploymentService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Deployment(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.deployments[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
