import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'planets',
        loadChildren: '../planets/planets.module#PlanetsPageModule'
      },
      {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
      },
      {
        path: 'details',
        loadChildren: '../details/details.module#DetailsPageModule'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/menu/dashboard',
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
