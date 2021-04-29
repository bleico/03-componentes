import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Componente } from './interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { UserIdleService } from 'angular-user-idle';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  componentes: Observable<Componente[]>;
  countdown: number;
  timeOut: any;
  onAlert: boolean;
  contador: number;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dataService: DataService,
    private userIdle: UserIdleService,
    private alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.componentes = this.dataService.getMenuOpts();
      this.initInterval();
    });
  }

  initInterval() {
    const countador = interval(10000);
    countador.subscribe((seg) => {
      seg *= 5;
      console.log(seg);
      this.presentAlert(seg);
    });
  }

  async presentAlert(seg) {
    const alert = await this.alertController.create({
      header: `Pasaron ${seg} segundos`,
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {

          },
        },
        {
          text: 'Aceptar',
          handler: () => {

          },
        },
      ],
      cssClass: "alert-class alertCustom",
    });

    await alert.present()
    const count = interval(4000);
    count.subscribe(async () => {
      await alert.dismiss();
    });
  }


}
