import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { Deployment } from './deployment.model';
import { ResponseWrapper, createRequestOption } from '../../shared';


@Injectable()
export class DeploymentService {

    private resourceUrl = SERVER_API_URL + 'api/deployments';

    constructor(private http: Http) { }

    create(deployment: Deployment): Observable<Deployment> {
        const copy = this.convert(deployment);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(deployment: Deployment): Observable<Deployment> {
        const copy = this.convert(deployment);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<Deployment> {
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
     * Convert a returned JSON object to Deployment.
     */
    private convertItemFromServer(json: any): Deployment {
        const entity: Deployment = Object.assign(new Deployment(), json);
        return entity;
    }

    /**
     * Convert a Deployment to a JSON which can be sent to the server.
     */
    private convert(deployment: Deployment): Deployment {
        const copy: Deployment = Object.assign({}, deployment);
        return copy;
    }
}
