import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileModule } from './profile/profile.module';
import { LessonModule } from './lesson/lesson.module';
import { HistoryModule } from './history/history.module';
import { ResourcesModule } from './resources/resources.module';
import { LayoutModule } from './_layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'ngx-webstorage-service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/history',
    pathMatch: 'full',
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    ProfileModule,
    LessonModule,
    HistoryModule,
    ResourcesModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
