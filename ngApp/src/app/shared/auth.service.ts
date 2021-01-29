import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerUrl = 'http://localhost:3000/api/register';
  private loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.registerUrl, user);
  }

  loginUser(user: User): Observable<User> {
    return this.http.post<User>(this.loginUrl, user);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  loggedOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/events']);
  }
}
