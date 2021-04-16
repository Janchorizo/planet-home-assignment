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

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  id: string;
  token: string;
}

export interface Movie {
  id: string,
  title: string,
  year: number,
  published_at: string,
  duration: number,
  country: string,
  language: string,
  director: string,
  description: string,
  budget: number,
  url: string,
  poster_url: string
}

export interface Rating {
  id: string;
  movie_id: string;
  score: number;
}