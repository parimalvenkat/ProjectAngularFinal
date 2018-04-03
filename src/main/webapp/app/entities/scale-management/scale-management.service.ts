import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { ScaleManagement } from './scale-management.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class ScaleManagementService {

    private resourceUrl = SERVER_API_URL + 'api/scale-managements';

    constructor(private http: Http) { }

    create(scaleManagement: ScaleManagement): Observable<ScaleManagement> {
        const copy = this.convert(scaleManagement);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(scaleManagement: ScaleManagement): Observable<ScaleManagement> {
        const copy = this.convert(scaleManagement);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<ScaleManagement> {
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
     * Convert a returned JSON object to ScaleManagement.
     */
    private convertItemFromServer(json: any): ScaleManagement {
        const entity: ScaleManagement = Object.assign(new ScaleManagement(), json);
        return entity;
    }

    /**
     * Convert a ScaleManagement to a JSON which can be sent to the server.
     */
    private convert(scaleManagement: ScaleManagement): ScaleManagement {
        const copy: ScaleManagement = Object.assign({}, scaleManagement);
        return copy;
    }
}
