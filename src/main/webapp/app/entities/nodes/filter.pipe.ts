import { Pipe, PipeTransform, Injectable} from '@angular/core';
import {Nodes} from "./nodes.model";
@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
    /*transform(items: any[], customsearch: any): any[] {
        console.log("customsearch = "+customsearch);
        console.log(("items ="+ items));
        if(!items) return [];
        if(!customsearch) return items;
        customsearch = customsearch.toLowerCase();
        return items.filter( it => {

            return it.toLowerCase().includes(customsearch);



        });
    }*/

    transform(items: Nodes[], value: any): any[] {
        if (!items || !value) {
            return items;
        }
        console.log("your search token = "+value);


        return items.filter(e => e.masterUrl.toLowerCase().includes(value.toLocaleLowerCase()));

/*
             return items.filter(e=> e.id.toExponential().includes(value.toExponential()));



*/

    }
}
