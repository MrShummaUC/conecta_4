import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

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
      spinner: 'circles',
    });
    console.log('Push the button "Mantenimiento"')
    this.navCtrl.navigateForward('mantenimiento')
    await loading.present();
  }

}
