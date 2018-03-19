/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { Try1TestModule } from '../../../test.module';
import { UserDetailsDetailComponent } from '../../../../../../main/webapp/app/entities/user-details/user-details-detail.component';
import { UserDetailsService } from '../../../../../../main/webapp/app/entities/user-details/user-details.service';
import { UserDetails } from '../../../../../../main/webapp/app/entities/user-details/user-details.model';

describe('Component Tests', () => {

    describe('UserDetails Management Detail Component', () => {
        let comp: UserDetailsDetailComponent;
        let fixture: ComponentFixture<UserDetailsDetailComponent>;
        let service: UserDetailsService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [UserDetailsDetailComponent],
                providers: [
                    UserDetailsService
                ]
            })
            .overrideTemplate(UserDetailsDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(UserDetailsDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(UserDetailsService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new UserDetails(123)));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.userDetails).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
