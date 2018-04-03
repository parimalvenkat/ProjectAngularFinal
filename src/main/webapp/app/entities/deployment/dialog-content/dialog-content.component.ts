
import {Component, Inject, Input} from "@angular/core";


@Component({
    selector: "jhi-dialog-content",
    templateUrl: "./dialog-content.component.html"
})
export class DialogContentComponent {
    @Input() title: string;
    @Input() content: string;
    @Input() data: string;

    constructor() { }

}
