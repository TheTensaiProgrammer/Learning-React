import { Button } from "../../../../componets/button";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="debug">
      <h1>Header</h1>
      <Button onClick={() => navigate("/commentSection")}>
        Comment section
      </Button>
      <Button onClick={() => console.log(11)}>Press me 2</Button>
      <Button onClick={() => console.log(11)}>Press me 3</Button>
      <Button onClick={() => console.log(11)}>Press me 4</Button>
    </div>
  );
};

export { Header };
