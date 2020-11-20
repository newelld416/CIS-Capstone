import QuestionModel from './question.model'

export default class QuizModel {

    subTitle: string;
    questions: QuestionModel[];

    constructor(subTitle: string, questions: QuestionModel[]) {
        this.subTitle = subTitle;
        this.questions = questions;
    }

    public setSubTitle(subTitle: string) {
        this.subTitle = subTitle;
    }

    public getSubTitle() {
        return this.subTitle;
    }

    public setQuestions(questions: QuestionModel[]) {
        this.questions = questions;
    }

    public getQuestions() {
        return this.questions;
    }
}
