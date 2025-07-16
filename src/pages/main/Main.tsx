import "./Main.css";
import { Header } from "./components/Header";
import { List } from "./components/list";
import { SideMenu } from "./components/SideMenu";

const Main = () => {
  return (
    <div className="main-layout">
      <div className="side-menu">
        <SideMenu />
      </div>
      <div className="center-content">
        <Header />
        <List />
      </div>
    </div>
  );
};

export { Main };
