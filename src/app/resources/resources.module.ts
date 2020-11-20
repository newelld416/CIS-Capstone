import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesComponent } from './resources.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../_layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'resources',
    component: MainLayoutComponent,
    children: [
      { path: '', component: ResourcesComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ResourcesComponent]
})
export class ResourcesModule { }
