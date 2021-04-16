import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { endpoints } from './api_endpoints';
import { APIResponse } from './types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<APIResponse> {
    //  if (error.error instanceof ErrorEvent) { // client side
    //    // has error.error.message;
    //  } else { // server side
    //    // has error.status and error.error
    //  }
    //  Return an observable with a user-facing error message.

    return Observable.create(function (observer) {
      observer.next({ok: false, status: error.status});
      observer.complete();
    })
  }

  /**
   * Tries n times to execute a query for a given endpoint and parameters,
   * and returns an observable if the request could be executed.
   * @param endpointName The endpoint name
   * @param parameters Required parameters to create the url
   * @param queryParams An object with url query parameters
   * @param body An optional request body object
   * @param retries The number of retries
   */
  hit (
      endpointName: string,
      parameters: object|null=null,
      queryParams: {}|null=null,
      body: any|null=null,
      authToken: string|null=null,
      retries: number=3): Observable<APIResponse>
  {
    let response = null;
    const options: {
      params?: any,
      responseType?: string,
      headers?: any
    } = {};
    if (endpoints.has(endpointName) === false) {
      return response;
    }

    const {method, buildUrl, hitWithHttpClient} = endpoints.get(endpointName);
    const url = buildUrl(parameters);
    const acceptsBody = ['PUT', 'POST'].includes(method) ? true : false;

    const params = queryParams === null
      ? new HttpParams()
      : new HttpParams({fromObject: queryParams});

    options.responseType = 'json';
    options.params = params;
    if (authToken !== null) {
      options.headers = {Authorization: 'Bearer: '+authToken};
    }
  
    if (acceptsBody === true) {
      return hitWithHttpClient(this.httpClient, url, body, options)
        .pipe(
          retry(retries), // retry a failed request up to 3 times
          map(body => ({ok: true, status: 200, body})),
          catchError(this.handleError), // then handle the error
        );
    } else {
      return hitWithHttpClient(this.httpClient, url, options)
        .pipe(
          retry(retries), // retry a failed request up to 3 times
          map(body => ({ok: true, status: 200, body})),
          catchError(this.handleError), // then handle the error
        );
    }
  }
}
