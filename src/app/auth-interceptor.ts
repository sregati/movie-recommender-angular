import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable} from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private login: LoginService, private router: Router) {

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.login.currentTokenSubject.value;
        
        const authReq = request.clone({
            setHeaders: {
                Authorization: "Bearer " + token
            }
        });

        return next.handle(authReq).pipe(
            tap(null, error => {
                if(error instanceof HttpErrorResponse && (error as HttpErrorResponse).status == 401)
                    this.router.navigate(['/login']);
            })
        );
    }

}