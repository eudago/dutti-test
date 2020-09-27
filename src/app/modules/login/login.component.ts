import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  login() {
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
    .then((response) => {
      if (response.success) {
        this.authenticationService.setCredentials(this.loginForm.value.username, this.loginForm.value.password);
        this.router.navigate(['/']);  
      }
      else {
        //TODO: show error message
      }
    })
  }

  private initLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

}
