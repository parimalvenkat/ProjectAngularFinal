/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Try1TestModule } from '../../../test.module';
import { TenantDeploymentDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/tenant-deployment/tenant-deployment-delete-dialog.component';
import { TenantDeploymentService } from '../../../../../../main/webapp/app/entities/tenant-deployment/tenant-deployment.service';

describe('Component Tests', () => {

    describe('TenantDeployment Management Delete Component', () => {
        let comp: TenantDeploymentDeleteDialogComponent;
        let fixture: ComponentFixture<TenantDeploymentDeleteDialogComponent>;
        let service: TenantDeploymentService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Try1TestModule],
                declarations: [TenantDeploymentDeleteDialogComponent],
                providers: [
                    TenantDeploymentService
                ]
            })
            .overrideTemplate(TenantDeploymentDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TenantDeploymentDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TenantDeploymentService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
