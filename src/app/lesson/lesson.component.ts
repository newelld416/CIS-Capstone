import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatStepper } from '@angular/material/stepper';


import { LessonService } from '../shared/services/lesson.service';
import { BrowserStorageService } from '../shared/services/browser-storage.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;

  id: string;
  lessons: any[];
  activeLesson: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  readingContent: any;
  exampleContent: any;
  quizContent: any;
  certificateContent: any;
  lessonsCompleted: boolean[];
  title: string;
  example: string;

  quizCompleted: boolean;

  base_lesson_url = 'assets/data/lesson_';
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    private browserStorage: BrowserStorageService
  ) {

  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params.id;
      this.getJSON(this.id).subscribe(data => {
        
        this.isLoading = false;
        this.activeLesson = data;
        this.title = this.activeLesson.info.title;
        this.example = this.activeLesson.info.example;
        this.readingContent = this.activeLesson.lesson.reading;
        this.exampleContent = this.activeLesson.lesson.example.content;
        this.quizContent = this.activeLesson.lesson.quiz.content;
        this.certificateContent = this.activeLesson.lesson.certificate.content;
      });
    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  someFunction(questionsAnsweredCorrectly: boolean){
    this.quizCompleted = questionsAnsweredCorrectly;
  } 

  public getJSON(id: string): Observable<any> {
    return this.http.get(`${this.base_lesson_url}${id}.json`);
  }

  public completeLesson() {
    this.lessonsCompleted = this.browserStorage.getLocalStorage("LessonsCompleted");
    if (this.lessonsCompleted == null) {
      this.lessonsCompleted = [false, false, false, false, false, false, false, false];
    }
    this.lessonsCompleted[this.id] = true;
    this.browserStorage.setLocalStorage("LessonsCompleted", this.lessonsCompleted);
  }

  public nextLesson() {
    this.stepper.selectedIndex = 0;
    this.router.navigateByUrl(`lesson/${+this.id + 1}`);
  }

}

