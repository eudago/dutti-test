import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashService } from 'src/app/services/flash/flash.service';
import { UsersService } from 'src/app/services/users/users.service';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;

  constructor(
    private usersService: UsersService, 
    private flashService: FlashService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  register() {
    this.loading = true;
    this.usersService.create(this.registerForm.value).then((response: Response) => {
      this.loading = false;
      if (response.success) {
        this.flashService.success('Registration successful', true);
        this.router.navigate(['/login']);
      }
      else {
        this.flashService.error(response.message, false);
      }
    });
  }

  private initRegisterForm() {
    this.registerForm = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

}
