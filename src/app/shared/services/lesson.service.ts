import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrowserStorageService } from './browser-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  base_lesson_url = 'assets/data/lesson_';

  constructor(private http: HttpClient, private broswerStorage: BrowserStorageService) {
  }

  public getLessonData(id: string): Observable<any> {
    return this.http.get(`${this.base_lesson_url}${id}.json`);
  }

  public storeLessonActivity(lessonId: number, questionId: number, value: boolean) {
    //TODO: Store lesson activity when a question is answered
    // console.log("lessonId: " + lessonId);
    // console.log("questionId: " + questionId);
    // console.log("value: " + value);

    //this.broswerStorage.getLocalStorage
  }
}
