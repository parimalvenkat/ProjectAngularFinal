import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { VersionManagement } from './version-management.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class VersionManagementService {

    private resourceUrl = SERVER_API_URL + 'api/version-managements';

    constructor(private http: Http) { }

    create(versionManagement: VersionManagement): Observable<VersionManagement> {
        const copy = this.convert(versionManagement);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(versionManagement: VersionManagement): Observable<VersionManagement> {
        const copy = this.convert(versionManagement);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<VersionManagement> {
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
     * Convert a returned JSON object to VersionManagement.
     */
    private convertItemFromServer(json: any): VersionManagement {
        const entity: VersionManagement = Object.assign(new VersionManagement(), json);
        return entity;
    }

    /**
     * Convert a VersionManagement to a JSON which can be sent to the server.
     */
    private convert(versionManagement: VersionManagement): VersionManagement {
        const copy: VersionManagement = Object.assign({}, versionManagement);
        return copy;
    }
}
