import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { TenantContactDetails } from './tenant-contact-details.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class TenantContactDetailsService {

    private resourceUrl = SERVER_API_URL + 'api/tenant-contact-details';

    constructor(private http: Http) { }

    create(tenantContactDetails: TenantContactDetails): Observable<TenantContactDetails> {
        const copy = this.convert(tenantContactDetails);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(tenantContactDetails: TenantContactDetails): Observable<TenantContactDetails> {
        const copy = this.convert(tenantContactDetails);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<TenantContactDetails> {
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
     * Convert a returned JSON object to TenantContactDetails.
     */
    private convertItemFromServer(json: any): TenantContactDetails {
        const entity: TenantContactDetails = Object.assign(new TenantContactDetails(), json);
        return entity;
    }

    /**
     * Convert a TenantContactDetails to a JSON which can be sent to the server.
     */
    private convert(tenantContactDetails: TenantContactDetails): TenantContactDetails {
        const copy: TenantContactDetails = Object.assign({}, tenantContactDetails);
        return copy;
    }
}
