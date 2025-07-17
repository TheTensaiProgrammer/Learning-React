import { Button } from "../../../../componets/button";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="debug">
      <h1>Header</h1>

      <Button onClick={() => navigate("/")}>Return to Main Page</Button>
    </div>
  );
};

export { Header };
