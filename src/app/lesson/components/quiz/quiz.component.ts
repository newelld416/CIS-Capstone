import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '../../../shared/services/lesson.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Output() trackAnswers: EventEmitter<boolean> = new EventEmitter<boolean>();

  quiz: any;
  questions: any;
  content: string;
  subTitle: string;
  id: number;
  options: string[];
  totalQuestions: number;
  totalQuestionsAnsweredCorrectly: number = 0;
  selectedAnswer: string;
  selectedData: string[];

  questionsAnsweredCorrectly: boolean[];

  constructor(private route: ActivatedRoute, private lessonService: LessonService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => { 
      this.lessonService.getLessonData(params.id).subscribe(data => {
        this.id = data.info.id;
        this.quiz = data.lesson.quiz;
        this.content = this.quiz.content; 
        this.subTitle = this.quiz.subTitle;
        this.questions = this.quiz.questions;
        this.totalQuestions = this.questions.length;
        this.options = this.questions[0].options;

        this.selectedData = new Array(this.questions.length).fill('');

        //Default questions answered correctly
        // this.questionsAnsweredCorrectly = new boolean[this.questions.length];
        // Array.fill(this.questionsAnsweredCorrectly, false);

       });
    });
  }

  questionAnswered(questionObj: any, value: string) {
    if (value == questionObj.answer) {
      this.totalQuestionsAnsweredCorrectly++;
    }
    this.trackAnswers.emit(this.totalQuestionsAnsweredCorrectly >= this.questions.length);
    this.lessonService.storeLessonActivity(this.id, questionObj.id, value == questionObj.answer);
  }

}
