/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { Try1TestModule } from '../../../test.module';
import { StagesDetailComponent } from '../../../../../../main/webapp/app/entities/stages/stages-detail.component';
import { StagesService } from '../../../../../../main/webapp/app/entities/stages/stages.service';
import { Stages } from '../../../../../../main/webapp/app/entities/stages/stages.model';

describe('Component Tests', () => {

    describe('Stages Management Detail Component', () => {
        let comp: StagesDetailComponent;
        let fixture: ComponentFixture<StagesDetailComponent>;
        let service: StagesService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [StagesDetailComponent],
                providers: [
                    StagesService
                ]
            })
            .overrideTemplate(StagesDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(StagesDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(StagesService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new Stages(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.stages).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
