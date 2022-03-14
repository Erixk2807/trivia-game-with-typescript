import Label from "./Label";
import { shuffle, replaceURI } from "../helpers";
import { questionData, triviaData } from "../models";

interface Props {
  question: any;
  submitAnswer: (event: React.ChangeEvent<HTMLInputElement>) => void;
  playerAnswers: triviaData[];
  // questionId: string;
}

const Question = ({
  question,
  submitAnswer,
  playerAnswers,
}: // questionNumber,
Props) => {
  // const answers = question[1].incorrect_answers.concat(
  //   question[1].correct_answer
  // );

  // const randomOrder = shuffle(answers);
  // const content = replaceURI(question[1].question);
  return (
    <div>
      <p>{question.question}.</p>
      {question.answersOptions.map((answer: any, index: number) => {
        return (
          <Label
            key={index}
            content={answer.option}
            submitAnswer={submitAnswer}
            playerAnswers={playerAnswers}
            // questionNumber={question.id}
            question={question}
          />
        );
      })}
      <hr />
    </div>
  );
};

export default Question;
