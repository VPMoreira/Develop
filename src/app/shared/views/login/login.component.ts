import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Plugins } from '@capacitor/core';
import { async } from '@angular/core/testing';
import { iUsuario } from './usuario';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusBar, StatusBarStyle, Style } from '@capacitor/status-bar';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';


StatusBar.setOverlaysWebView({ overlay: true });

const setBackgroundColor = async () => {
  await StatusBar.setBackgroundColor({color: '#006400'});
}
const showStatusBar = async () => {
  await StatusBar.show();
};


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  form!: FormGroup;
  logindata!: iUsuario

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    StatusBar.setBackgroundColor({color: '#006400'});
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

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Parece que algo deu errado!", true);
    return EMPTY;
  }
  



}