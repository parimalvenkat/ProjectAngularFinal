import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { Application } from './application.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class ApplicationService {

    private resourceUrl = SERVER_API_URL + 'api/applications';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(application: Application): Observable<Application> {
        const copy = this.convert(application);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(application: Application): Observable<Application> {
        const copy = this.convert(application);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<Application> {
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
     * Convert a returned JSON object to Application.
     */
    private convertItemFromServer(json: any): Application {
        const entity: Application = Object.assign(new Application(), json);
        entity.created = this.dateUtils
            .convertDateTimeFromServer(json.created);
        entity.updated = this.dateUtils
            .convertDateTimeFromServer(json.updated);
        return entity;
    }

    /**
     * Convert a Application to a JSON which can be sent to the server.
     */
    private convert(application: Application): Application {
        const copy: Application = Object.assign({}, application);

        copy.created = this.dateUtils.toDate(application.created);

        copy.updated = this.dateUtils.toDate(application.updated);
        return copy;
    }
}
