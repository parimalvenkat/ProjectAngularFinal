
import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
    selector: 'jhi-slider',
    templateUrl: './slider.widget.html',
    styleUrls: ['./slider.widget.css']
})
export class SliderWidget implements OnInit {
    @Input() max: number;
    @Input() min: number;
    @Input() color: string;
    @Input() presetvalue: number = 0;

    @Output() valChanged: EventEmitter<number>;

    public currentVal: number;

    ngOnInit(): void {
        this.currentVal = this.presetvalue;
    }

    constructor(){
        this.valChanged = new EventEmitter<number>();
    }

    slided(eve: any){
        this.currentVal = eve.value;
        this.valChanged.emit(this.currentVal);
    }
}
