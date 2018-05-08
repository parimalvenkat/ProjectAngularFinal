import { Component, OnInit, ViewChild } from '@angular/core';

import { Principal, AccountService } from '../../shared';

@Component({
    selector: 'jhi-settings',
    templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
    error: string;
    success: string;
    settingsAccount: any;
    languages: any[];
    imageChangedEvent: any = '';
    croppedImage: any = '';
    @ViewChild('myInput')
    myInputVariable: any;
    isEdit: boolean = false;

    constructor(
        private account: AccountService,
        private principal: Principal
    ) {
    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.settingsAccount = this.copyAccount(account);
        });
    }

    reset() {
        this.isEdit=true;
        this.myInputVariable.nativeElement.value = '';
        this.imageChangedEvent='';
        this.croppedImage='';
    }

    getImageType() {
        return this.principal.getImageType();
    }

    getImageUrl() {
        return this.principal.getImageUrl();
    }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(image: string) {
        this.settingsAccount.imageUrl=image.split("base64,")[1];
        this.croppedImage = image;
        this.settingsAccount.imageType=image.split(";base64,")[0];
        this.settingsAccount.imageType=this.settingsAccount.imageType.split("data:")[1];
        
    }

    save() {
        this.account.save(this.settingsAccount).subscribe(() => {
            this.error = null;
            this.success = 'OK';
            this.principal.identity(true).then((account) => {
                this.settingsAccount = this.copyAccount(account);
            });
        }, () => {
            this.success = null;
            this.error = 'ERROR';
        });
    }

    copyAccount(account) {
        return {
            activated: account.activated,
            email: account.email,
            firstName: account.firstName,
            langKey: account.langKey,
            lastName: account.lastName,
            login: account.login,
            imageUrl: account.imageUrl,
            imageType: account.imageType
        };
    }

}
