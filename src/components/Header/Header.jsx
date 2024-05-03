import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import Socials from "../Socials/Socials";

const Header = () => {
  return (
    <header className="header">
      <p className="header__logo header__logo_cyan">
        <span className="header__logo_white">{`<`}</span>
        Save_on
        <span className="header__logo_white">{` />`}</span>
      </p>
      <div className="header__container">
        <SearchBar className="header__searchbar" />
        <Socials className="header__socials" />
      </div>
    </header>
  );
};

export default Header;
