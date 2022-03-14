import { nanoid } from "nanoid";
import { questionData, triviaData } from "../models";
interface Props {
  content: string;
  submitAnswer: (event: React.ChangeEvent<HTMLInputElement>) => void;
  playerAnswers: triviaData[];
  // questionNumber: string;
  question: any;
}

const Label = ({
  content,
  submitAnswer,
  playerAnswers,
  // questionNumber,
  question,
}: Props) => {
  let answerIndex = playerAnswers.findIndex(
    (item) => item.id === question.id && item.answer === content
  );
  // const labelId: string = nanoid();
  return (
    <label>
      <input
        className="question__label"
        type="radio"
        id={question.id}
        name={content}
        value={question.isCorrect ? "correctAnswer" : "incorrectAnswer"}
        checked={answerIndex !== -1}
        onChange={submitAnswer}
      />
      {content}
    </label>
  );
};

export default Label;
