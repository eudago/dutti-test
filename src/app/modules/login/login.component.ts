import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from 'src/app/interfaces/response';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { FlashService } from 'src/app/services/flash/flash.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private flashService: FlashService
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  login() {
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
    .then((response: Response) => {
      if (response.success) {
        this.authenticationService.setCredentials(this.loginForm.value.username, this.loginForm.value.password);
        this.router.navigate(['/']);  
      }
      else {
        this.flashService.error(response.message, false)
      }
    })
  }

  private initLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  get username() { return this.loginForm.get('username'); }

  get password() { return this.loginForm.get('password'); }

}
