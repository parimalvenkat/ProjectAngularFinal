/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { Try1TestModule } from '../../../test.module';
import { RepositoriesDetailComponent } from '../../../../../../main/webapp/app/entities/repositories/repositories-detail.component';
import { RepositoriesService } from '../../../../../../main/webapp/app/entities/repositories/repositories.service';
import { Repositories } from '../../../../../../main/webapp/app/entities/repositories/repositories.model';

describe('Component Tests', () => {

    describe('Repositories Management Detail Component', () => {
        let comp: RepositoriesDetailComponent;
        let fixture: ComponentFixture<RepositoriesDetailComponent>;
        let service: RepositoriesService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [RepositoriesDetailComponent],
                providers: [
                    RepositoriesService
                ]
            })
            .overrideTemplate(RepositoriesDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(RepositoriesDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(RepositoriesService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new Repositories(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.repositories).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
