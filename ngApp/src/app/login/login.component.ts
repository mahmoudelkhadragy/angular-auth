import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error = null;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogin(form: NgForm): void {
    this.auth.loginUser(form.value).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/events']);
      },
      (error) => {
        this.showErrorMessage(error.error);
        console.log(error);
      }
    );
  }

  showErrorMessage(message: any): void {
    this.error = message;
    setTimeout(() => {
      this.error = null;
    }, 2000);
  }
}
