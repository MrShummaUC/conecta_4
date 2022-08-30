import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(
    private navCtrl: NavController, 
    private loadingController: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async toMantenimiento() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 500,
      cssClass: 'custom-loading',
    });
    console.log('Push the button "Mantenimiento"')
    this.navCtrl.navigateForward('mantenimiento')
    await loading.present();
  }

}
