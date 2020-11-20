export default class Question {

    id: number;
    question: string;
    answer: string;
    options: string[];

    constructor(id: number, question: string, answer: string, options: string[]) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.options = options
    }

    public setId(id: number) {
        this.id = id;
    }

    public getId() {
        return this.id;
    }

    public setQuestion(question: string) {
        this.question = question;
    }

    public getQuestion() {
        return this.question;
    }

    public setAnswer(answer: string) {
        this.answer = answer;
    }

    public getAnswer() {
        return this.answer;
    }

    public setOptions(options: string[]) {
        this.options = options;
    }

    public getOptions() {
        return this.options;
    }
}
