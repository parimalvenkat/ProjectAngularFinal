import { Injectable } from '@angular/core';
import {NavbarComponent} from "./navbar.component";

@Injectable()
export class NavbarService {

    constructor(
        private navbarcomponent: NavbarComponent,

    )
    {}
    navload()
    {
        this.navbarcomponent.regist=false;
    }

    navloadnew()
    {
        this.navbarcomponent.regist=true;
    }
}

