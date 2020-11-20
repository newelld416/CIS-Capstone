import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '../../../shared/services/lesson.service';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss'],
  providers: [ LessonService ],
  encapsulation: ViewEncapsulation.None,
})
export class ReadingComponent implements OnInit {
  
  id: number;

  constructor(private route: ActivatedRoute, private lessonService: LessonService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { 
      this.lessonService.getLessonData(params.id).subscribe(data => {
        this.id = data.info.id;
       });
    });
  }

}
