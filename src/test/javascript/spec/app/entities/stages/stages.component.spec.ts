/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Try1TestModule } from '../../../test.module';
import { StagesComponent } from '../../../../../../main/webapp/app/entities/stages/stages.component';
import { StagesService } from '../../../../../../main/webapp/app/entities/stages/stages.service';
import { Stages } from '../../../../../../main/webapp/app/entities/stages/stages.model';

describe('Component Tests', () => {

    describe('Stages Management Component', () => {
        let comp: StagesComponent;
        let fixture: ComponentFixture<StagesComponent>;
        let service: StagesService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [StagesComponent],
                providers: [
                    StagesService
                ]
            })
            .overrideTemplate(StagesComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(StagesComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(StagesService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Stages(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.stages[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
