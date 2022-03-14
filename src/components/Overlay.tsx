import Button from "./Button";
const Overlay = ({ startQuiz }: { startQuiz: any }) => {
  return (
    <div className="overlay">
      <h1>Are you smart enough to date me?</h1>
      <p>Let's find out</p>
      <Button onClick={startQuiz} content="Start Quiz" />
    </div>
  );
};

export default Overlay;
