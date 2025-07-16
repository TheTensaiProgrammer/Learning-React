import { Button } from "../../../../componets/button";

const Header = () => {
  return (
    <div className="debug">
      <h1>Header</h1>
      <Button onClick={() => console.log(11)}>Press me</Button>
      <Button onClick={() => console.log(11)}>Press me 2</Button>
      <Button onClick={() => console.log(11)}>Press me 3</Button>
      <Button onClick={() => console.log(11)}>Press me 4</Button>
    </div>
  );
};

export { Header };
