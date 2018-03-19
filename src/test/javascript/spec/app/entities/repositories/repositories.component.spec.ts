/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Try1TestModule } from '../../../test.module';
import { RepositoriesComponent } from '../../../../../../main/webapp/app/entities/repositories/repositories.component';
import { RepositoriesService } from '../../../../../../main/webapp/app/entities/repositories/repositories.service';
import { Repositories } from '../../../../../../main/webapp/app/entities/repositories/repositories.model';

describe('Component Tests', () => {

    describe('Repositories Management Component', () => {
        let comp: RepositoriesComponent;
        let fixture: ComponentFixture<RepositoriesComponent>;
        let service: RepositoriesService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [RepositoriesComponent],
                providers: [
                    RepositoriesService
                ]
            })
            .overrideTemplate(RepositoriesComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(RepositoriesComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(RepositoriesService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Repositories(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.repositories[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
