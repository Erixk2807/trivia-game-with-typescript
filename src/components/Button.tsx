interface Props {
  onClick: () => void;
  content: string;
}

const Button = ({ onClick, content }: Props) => {
  return <button onClick={onClick}>{content}</button>;
};

export default Button;
