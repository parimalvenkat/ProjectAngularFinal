
import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";
@Component({
    selector: 'jhi-compositeinput',
    templateUrl: './compositeinputfield.component.html'
})
export class CompositeInputFieldComponent implements OnInit{

    @Input() inputData:any[];
    @Input() keyLabel:string;
    @Input() valueLabel:string;

    constructor(){
        if(!this.inputData){
            this.inputData = [];
            this.inputData.push({protocol:'http', key:'', value:''});
        }
        if(!this.keyLabel){
            this.keyLabel = 'Key';
        }
        if(!this.valueLabel){
            this.valueLabel = 'Value';
        }
    }

    ngOnInit(){

    }

    addRow(){
        this.inputData.push({protocol:'http',key:'', value:''});
    }

    delRow(data: any){
        this.inputData.splice(this.inputData.indexOf(data, 0), 1);

        if(this.inputData.length === 0){
            this.inputData.push({protocol:'http', key:'', value:''});
        }
    }
}
