import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

import { skills } from "../../utils/constants";

const App = () => {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <Main skills={skills} />
      </div>
    </div>
  );
};

export default App;
