import { iUsuario } from './usuario';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  form!: FormGroup;
  logindata!: iUsuario

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
    login: ['', Validators.required],
    senha: ['', Validators.required]
    })
  }


  onSubmit() {
    console.log(this.form.value);
    this.logindata = this.form.value
    this.authService.fazerLogin(this.logindata)
  }



}