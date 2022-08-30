import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.page.html',
  styleUrls: ['./mantenimiento.page.scss'],
})
export class MantenimientoPage implements OnInit {

  constructor(
    private navCtrl: NavController, 
    private loadingController: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async toIndex() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 500,
      spinner: 'circles',
    });
    console.log('Push the button "Volver"')
    this.navCtrl.navigateForward('index')
    await loading.present();
  }

}
