import { Component, OnInit } from '@angular/core';
import { PlanetsService, Planet, PlanetsResponse } from './planets.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage {
  planets: Planet[] = [];
  imgPlanet = '../../../assets/img/planet-picture.png';

  constructor(private service: PlanetsService, private toastCtrl: ToastController) {
    this.getPlanets();
  }

  private async getPlanets() {
    try {
      this.service.getPlanets().then(data => {
        this.handlePlanetResponse(data);
      });
    }
    catch (err) {
      this.showErrorMessage(err);
    }
  }

  handlePlanetResponse(data: PlanetsResponse) {
    data.results.map(planet => {
      this.planets.push(planet);
    });
  }

  async showErrorMessage(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
    });
    toast.present();
  }
}
