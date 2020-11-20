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

  constructor(private route: ActivatedRoute, private lessonService: LessonService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.lessonService.getLessonData(params.id).subscribe(data => {
        this.courseTitle = data.lesson.certificate.courseTitle;
      });
    });
  }

}
