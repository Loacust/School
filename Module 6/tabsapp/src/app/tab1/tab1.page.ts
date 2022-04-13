import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController) {}


  async showAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'This is a friendly reminder',
      message: 'To go fuck yourself',
      buttons: [
        {text:"OK",
      handler: ()=> {
        console.log("OK button was clicked")
      }},
      {
        text: "Cancel",
        handler:()=> {
          console.log("Cancel button was clicked")
        }
      }
      ]
    });
    await alert.present();
  }
}