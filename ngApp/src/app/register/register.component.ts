import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  error: any = null;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    this.auth.registerUser(form.value).subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem('token', response.token);
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
