import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryComponent } from './history.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../_layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'history',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HistoryComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [HistoryComponent]
})
export class HistoryModule { }
