import { triviaQuestion } from "./models";
import { shuffle, replaceURI } from "./helpers";
import { nanoid } from "nanoid";

const fetchedData = (
  apiUrl: string,
  setMethod: React.Dispatch<React.SetStateAction<triviaQuestion[]>>
) => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) =>
      setMethod(
        data.results.map((q: any) => {
          const allAnswers = [
            ...q.incorrect_answers.map((item: string) => {
              let answerOption = {
                option: item,
                isCorrect: false,
              };
              return answerOption;
            }),
            { option: q.correct_answer, isCorrect: true },
          ];

          const questionData = {
            id: nanoid(),
            question: replaceURI(q.question),
            answersOptions: allAnswers.sort(() => Math.random() - 0.5),
          };
          return questionData;
        })
      )
    );
};

export { fetchedData };
