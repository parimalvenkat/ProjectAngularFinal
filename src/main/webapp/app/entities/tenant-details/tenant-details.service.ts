import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { TenantDetails } from './tenant-details.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class TenantDetailsService {

    private resourceUrl = SERVER_API_URL + 'api/tenant-details';

    constructor(private http: Http) { }

    create(tenantDetails: TenantDetails): Observable<TenantDetails> {
        const copy = this.convert(tenantDetails);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(tenantDetails: TenantDetails): Observable<TenantDetails> {
        const copy = this.convert(tenantDetails);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<TenantDetails> {
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
     * Convert a returned JSON object to TenantDetails.
     */
    private convertItemFromServer(json: any): TenantDetails {
        const entity: TenantDetails = Object.assign(new TenantDetails(), json);
        return entity;
    }

    /**
     * Convert a TenantDetails to a JSON which can be sent to the server.
     */
    private convert(tenantDetails: TenantDetails): TenantDetails {
        const copy: TenantDetails = Object.assign({}, tenantDetails);
        return copy;
    }
}
