import { Component } from '@angular/core';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [
    DefaultLoginLayout,
    ReactiveFormsModule,
    PrimaryInput
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
    // private toastService: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      senha: new FormControl('',[Validators.required, Validators.minLength(6)])
    })  
  }

  submit(){
    console.log(this.loginForm.value)
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.senha).subscribe({
      // next: () => this.toastService.success("Login realizado"),
      // error: () => this.toastService.error("Erro inesperado!")
      next: () => alert("Login realizado"),
      error: () => alert("Erro inesperado!")
    })
  }

  navigate(){
    this.router.navigate(["/signup"])
  }
}
