import "./App.scss";
import Overlay from "./components/Overlay";
import { useState, useEffect } from "react";
import { fetchedData } from "./fetchedData";
import { questionData, triviaData, triviaQuestion } from "./models";
import Button from "./components/Button";
import Question from "./components/Question";
import { arrayBuffer } from "stream/consumers";

const App: React.FC = () => {
  const [questions, setQuestions] = useState<triviaQuestion[]>([]);
  // const [triviaQuestions, setTriviaQuestion] = useState<triviaQuestion[]>([]);
  const [quiz, setQuiz] = useState<boolean>(false);
  const [playerAnswers, setPlayerAnswers] = useState<triviaData[]>([]);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  useEffect(() => {
    fetchedData(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=hard&type=multiple",
      setQuestions
    );
  }, []);

  const startQuiz = () => setQuiz((prevState) => !prevState);

  const submitAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const newAnswer: triviaData = {
      id: event.target.id,
      answer: event.target.name,
    };
    let playersAnswerCopy = [...playerAnswers];
    if (playersAnswerCopy.length === 0) {
      return setPlayerAnswers((prevState) => [...prevState, newAnswer]);
    }

    let answerIndex = playersAnswerCopy.findIndex(
      (item) => item.id === newAnswer.id
    );

    if (answerIndex == -1) {
      playersAnswerCopy.push(newAnswer);
    } else {
      playersAnswerCopy[answerIndex].answer = newAnswer.answer;
    }
    setPlayerAnswers(playersAnswerCopy);
  };

  const checkYourScore = () => {
    if (playerAnswers.length > 4) {
      setShowScore(true);
      // playerAnswers.forEach((el) => {
      //   console.log(el.id);
      //   questions[el.id]
      // });
      console.log(playerAnswers);
      console.log(questions);
    } else {
      alert("Answer all questions");
    }
  };

  return (
    <div className="container">
      {!quiz ? (
        <Overlay startQuiz={startQuiz} />
      ) : (
        <div>
          {questions.map((question, index) => {
            return (
              <Question
                key={index}
                submitAnswer={submitAnswer}
                question={question}
                playerAnswers={playerAnswers}
                // questionId={question.id}
              />
            );
          })}
          <div className="score">
            {showScore && <p>You scored {score}/5 correct answers</p>}
            <Button onClick={checkYourScore} content="Check answers" />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
