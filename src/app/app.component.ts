import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

constructor(
private platform: Platform,
private alertController: AlertController
){
  this.backButtonEvent();
}

backButtonEvent() {
  this.platform.backButton.subscribeWithPriority(10, () => {
    this.backButtonAlert();
  });
}

async backButtonAlert() {
  const alert = await this.alertController.create({
    message: '!!!!!'
  });

  await alert.present();
}

  title = 'Develop';
}
