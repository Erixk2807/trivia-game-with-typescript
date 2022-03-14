export interface questionData {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface triviaQuestion {
  id: string;
  question: string;
  answerOptions: [];
}

export interface triviaData {
  id: string;
  answer: string;
}
