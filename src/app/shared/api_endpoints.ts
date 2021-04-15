import { environment } from '../../environments/environment';
import { Endpoint } from './types';
import { HttpClient } from '@angular/common/http';

const baseUrl = `${environment.api_endpoint}/api/v1/candidates/${environment.api_token}`;

function GET(buildUrl): Endpoint{
    return {
        method: 'GET',
        hitWithHttpClient: function (httpClient: HttpClient, url:string, options){
            return httpClient.get(url, options);
        },
        buildUrl
    };
};

function POST(buildUrl): Endpoint{
    return {
        method: 'POST',
        hitWithHttpClient: function (httpClient: HttpClient, url:string, body:any, options){
            return httpClient.post(url, body, options);
        },
        buildUrl
    };
};

function PUT(buildUrl): Endpoint{
    return {
        method: 'PUT',
        hitWithHttpClient: function (httpClient: HttpClient, url:string, body:any, options){
            return httpClient.put(url, body, options);
        },
        buildUrl
    };
};

function DELETE(buildUrl): Endpoint{
    return {
        method: 'DELETE',
        hitWithHttpClient: function (httpClient: HttpClient, url:string, options){
            return httpClient.delete(url, options);
        },
        buildUrl
    };
};

export const endpoints: Map<string, Endpoint> = new Map([
    // users
    ['getCurrentUser', GET(() => `${baseUrl}/users/profile`)],
    ['updateCurrentUser', PUT(() => `${baseUrl}/users/profile`)],
    ['deleteCurrentUser', DELETE(() => `${baseUrl}/users/profile`)],
    ['createUser', POST(() => `${baseUrl}/users`)],
    ['login', POST(() => `${baseUrl}/users/login`)],

    // ratings
    ['getRatings', GET(() => `${baseUrl}/ratings`)],
    ['getRating', GET(({ratingId}) => `${baseUrl}/ratings/${ratingId}`)],
    ['updateRating', PUT(({ratingId}) => `${baseUrl}/ratings/${ratingId}`)],

    // movies
    ['getMovies', GET(() => `/movies`)],
    ['getRandomUnratedMovie', GET(() => `/movies/random_unrated`)],
    ['rateMovie', POST(({movieId}) => `/movies/${movieId}/rate`)],
    ['getRatedMovies', GET(() => `/movies/rated`)],
    ['getMovie', GET(({movieId}) => `/movies/${movieId}`)],
    ['getUnratedMovies', GET(() => `/movies/unrated`)]
]);