import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { Stages } from './stages.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class StagesService {

    private resourceUrl = SERVER_API_URL + 'api/stages';

    constructor(private http: Http) { }

    create(stages: Stages): Observable<Stages> {
        const copy = this.convert(stages);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(stages: Stages): Observable<Stages> {
        const copy = this.convert(stages);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<Stages> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to Stages.
     */
    private convertItemFromServer(json: any): Stages {
        const entity: Stages = Object.assign(new Stages(), json);
        return entity;
    }

    /**
     * Convert a Stages to a JSON which can be sent to the server.
     */
    private convert(stages: Stages): Stages {
        const copy: Stages = Object.assign({}, stages);
        return copy;
    }
}
