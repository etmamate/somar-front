import { Component } from '@angular/core';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';
import { FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
// import { ToastrService } from 'ngx-toastr';

interface SignupForm{
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl

}

@Component({
  selector: 'app-signup',
  imports: [
    DefaultLoginLayout,
    ReactiveFormsModule,
    PrimaryInput
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
  signupForm!: FormGroup<SignupForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    // private toastService: ToastrService
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })  
  }

  submit(){
    console.log(this.signupForm.value)
    this.loginService.login(this.signupForm.value.email, this.signupForm.value.password).subscribe({
      // next: () => this.toastService.success("Login realizado"),
      // error: () => this.toastService.error("Erro inesperado!")
      next: () => alert("Login realizado"),
      error: () => alert("Erro inesperado!")
    })
  }

  navigate(){
    this.router.navigate(["/login"])
  }
}
