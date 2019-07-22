import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.page.html",
  styleUrls: ["./alert.page.scss"]
})
export class AlertPage implements OnInit {
  titulo: string;
  constructor(public alertCtrl: AlertController) {}

  ngOnInit() {}

  async pressentInput() {
    const input = await this.alertCtrl.create({
      header: "Input",
      subHeader: "Ingrese su nombre",
      inputs: [
        {
          name: "txtNombre",
          type: "text",
          placeholder: "Nombre"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: "OK",
          handler: data => {
            console.log("Confirm OK", data);
            this.titulo = data.txtNombre;
          }
        }
      ]
    });

    await input.present();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: "Alert",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {
            console.log("Cancelar");
          }
        },
        {
          text: "OK",
          cssClass: "secondary",
          handler: blah => {
            console.log("Boton OK");
          }
        }
      ]
    });

    await alert.present();
  }
}
