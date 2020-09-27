import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  login() {
    console.log('login');
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
    .then((response) => {
      console.log(response);
      //TODO: set credentials, go ships
    })
    .catch((err) => {
      //TODO: show error message
    })
  }

  private initLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

}
