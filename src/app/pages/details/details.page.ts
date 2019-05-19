import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from '../Planets/planets.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  planet: Planet;
  imgPlanet = '../../../assets/img/planet-picture.png';
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((data: Planet) => {
      this.planet = data;
    });
  }

  ngOnInit() {
  }

}
