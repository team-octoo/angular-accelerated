import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const authorizationInterceptor: HttpInterceptorFn = (request, next) => {
    const URL_MATCH: string = 'your-api-url-that-needs-a-bearer-token';
    const token: string = 'Auth-1234567';

    if (request.url.startsWith(URL_MATCH) && token) {
        const headers: HttpHeaders = request.headers.set(
            'Authorization',
            `Bearer ${token}`,
        );

        request = request.clone({ headers });

        console.info(
            `%cAuthorizationInterceptor has ADDED a bearer token for request url ${request.url}`,
            'color: rgb(4, 255, 0)',
        );
    } else {
        console.info(
            `%cAuthorizationInterceptor has NOT ADDED a bearer token for request url ${request.url}`,
            'color: rgb(255, 0, 0)',
        );
    }

    return next(request);
};
