import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../_layout/main-layout/main-layout.component';

const routes: Routes = [
  {
      path: 'profile',
      component: MainLayoutComponent,
      children: [
          { path: '', component: ProfileComponent }
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
