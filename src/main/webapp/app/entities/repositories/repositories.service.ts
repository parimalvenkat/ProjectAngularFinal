import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { Repositories } from './repositories.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class RepositoriesService {

    private resourceUrl = SERVER_API_URL + 'api/repositories';

    constructor(private http: Http) { }

    create(repositories: Repositories): Observable<Repositories> {
        const copy = this.convert(repositories);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(repositories: Repositories): Observable<Repositories> {
        const copy = this.convert(repositories);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<Repositories> {
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
     * Convert a returned JSON object to Repositories.
     */
    private convertItemFromServer(json: any): Repositories {
        const entity: Repositories = Object.assign(new Repositories(), json);
        return entity;
    }

    /**
     * Convert a Repositories to a JSON which can be sent to the server.
     */
    private convert(repositories: Repositories): Repositories {
        const copy: Repositories = Object.assign({}, repositories);
        return copy;
    }
}
