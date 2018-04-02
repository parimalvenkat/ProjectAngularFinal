import { Pipe, PipeTransform, Injectable} from '@angular/core';
import {Nodes} from "./nodes.model";
@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {


    transform(items: Nodes[], value: any): any[] {
        if (!items || !value) {
            return items;
        }
        console.log("your search token = " + value);


        return items.filter(e =>

        {
            e.masterUrl.toLowerCase().includes(value.toLocaleLowerCase()

        )});

        /*
                     return items.filter(e=> e.id.toExponential().includes(value.toExponential()));



        */

    }
}
