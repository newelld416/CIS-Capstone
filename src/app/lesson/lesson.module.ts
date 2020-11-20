import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonComponent } from './lesson.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../_layout/main-layout/main-layout.component';
import { ReadingComponent } from './components/reading/reading.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CertificateComponent } from './components/certificate/certificate.component';

const routes: Routes = [
  {
    path: 'lesson/:id',
    component: MainLayoutComponent,
    children: [
      { path: '', component: LessonComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    SharedModule
  ],
  declarations: [LessonComponent, ReadingComponent, QuizComponent, CertificateComponent]
})
export class LessonModule { }
