import { AuthService } from './shared/auth.service';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: any): any {
    const authService = this.injector.get(AuthService);
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`,
      },
    });
    // console.log('here');

    return next.handle(tokenizedReq);
  }
}
