import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService, private userService : UserService) {
        userService.obsUserIsConnected.subscribe(connected => this.connected = connected); 
    }

    connected!: boolean;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let modifiedReq: HttpRequest<any>; 

        if(this.connected){
            const headers = new HttpHeaders()
            .append('Authorization', `${this.authService.getToken()}`);
            req = req.clone({ headers });
        }
        return next.handle(req);
    }

}