import { Header } from "./components/Header";
import { CenterList } from "./components/centerList";

const TheGodfather = () => {
  return (
    <div className="main-layout">
      <Header />
      <div className="center-content">
        <CenterList />
      </div>
    </div>
  );
};

export { TheGodfather };
