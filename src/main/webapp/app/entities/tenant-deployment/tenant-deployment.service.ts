import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { TenantDeployment } from './tenant-deployment.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class TenantDeploymentService {

    private resourceUrl = SERVER_API_URL + 'api/tenant-deployments';

    constructor(private http: Http) { }

    create(tenantDeployment: TenantDeployment): Observable<TenantDeployment> {
        const copy = this.convert(tenantDeployment);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(tenantDeployment: TenantDeployment): Observable<TenantDeployment> {
        const copy = this.convert(tenantDeployment);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<TenantDeployment> {
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
     * Convert a returned JSON object to TenantDeployment.
     */
    private convertItemFromServer(json: any): TenantDeployment {
        const entity: TenantDeployment = Object.assign(new TenantDeployment(), json);
        return entity;
    }

    /**
     * Convert a TenantDeployment to a JSON which can be sent to the server.
     */
    private convert(tenantDeployment: TenantDeployment): TenantDeployment {
        const copy: TenantDeployment = Object.assign({}, tenantDeployment);
        return copy;
    }
}
