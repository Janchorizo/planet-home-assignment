import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Endpoint{
    method: string;
    hitWithHttpClient: CallableFunction,
    buildUrl: CallableFunction;
};

export interface APIResponse{
    ok: boolean;
    status: number;
    body?: any;
}