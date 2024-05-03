import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

const App = () => {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;