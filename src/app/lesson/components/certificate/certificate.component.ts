import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '../../../shared/services/lesson.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
  providers: [LessonService]
})
export class CertificateComponent implements OnInit {

  courseTitle: string;
  quiz: any;
  questions: any;
  id: number;

  constructor(private route: ActivatedRoute, private lessonService: LessonService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.lessonService.getLessonData(params.id).subscribe(data => {
        this.courseTitle = data.lesson.certificate.courseTitle;
        this.id = data.info.id;
        this.quiz = data.lesson.quiz;
        this.questions = this.quiz.questions;
      });
    });
  }

}
