import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController, IonRouterOutlet } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(IonRouterOutlet, { static: true }) routerOutlet!: IonRouterOutlet;
  constructor(
    private platform: Platform,
    private alertController: AlertController,
    routerOutlet: IonRouterOutlet,
    private location: Location,
    private router: Router,

  ) {
    App.addListener('backButton', ({ canGoBack }) => {
      if(canGoBack){
        window.history.back();
      } else {
        App.exitApp();
      }
    });
    
  }

  title = 'Develop';
}
