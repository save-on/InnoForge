import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SideNav from "../SideNav/SideNav";

import { skills } from "../../utils/constants";
import { useState } from "react";

const App = () => {
  const [location, setLocation] = useState("home");

  const handleIdClick = (e) => {
    setLocation(e.target.closest(".sidenav__item").id);
  };

  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <Main skills={skills} />
      </div>
      <SideNav handleIdClick={handleIdClick} location={location} />
    </div>
  );
};

export default App;
