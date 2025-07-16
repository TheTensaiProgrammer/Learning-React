import { Button } from "../../../../componets/button";

const Header = () => {
  return (
    <div className="debug">
      <h1>Header</h1>
      <Button onClick={() => (document.location.href = "./")}>
        Return to Main Page
      </Button>
    </div>
  );
};

export { Header };
