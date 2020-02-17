import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../must-match.validator';
=======
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { User } from '../../user';
import { Genre } from '../../genre'
>>>>>>> 77657e1534b907a69f3d83679ec88417408c951a

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
<<<<<<< HEAD
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }
=======
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  liked: Genre[];
  Genre = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Horror' },
    { id: 4, name: 'Animation' },
    { id: 5, name: 'Drama' },
    { id: 6, name: 'Historical' }
  ];


  constructor(private router:Router, private login:LoginService) { }
>>>>>>> 77657e1534b907a69f3d83679ec88417408c951a

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }
  get f() { return this.registerForm.controls; }

<<<<<<< HEAD
  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}
=======
  register(form: NgForm){
    let newUser: User = form.value;
    this.login.registerAuth(newUser);
    this.router.navigate(['/login']);
  }
>>>>>>> 77657e1534b907a69f3d83679ec88417408c951a
}
