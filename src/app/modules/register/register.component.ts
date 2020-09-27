import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  register() {
    console.log(this.registerForm.value);
    this.usersService.create(this.registerForm.value).then((result) => {
      console.log(result);
    })
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
