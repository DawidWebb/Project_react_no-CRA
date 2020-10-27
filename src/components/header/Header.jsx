import React, { useContext, useState } from "react";
import bemCssModules from "bem-css-modules";

import { StoreContext } from "../../store/StoreProvider";

import { default as HeaderStyles } from "./Header.module.scss";
import LoginForm from "../LoginForm/LoginForm";
const style = bemCssModules(HeaderStyles);

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, setUser } = useContext(StoreContext);

  const handleOnClose = () => setIsModalOpen(false);

  const handleOnClick = () => {
    if (Boolean(user)) {
      setUser(null);
    } else {
      setIsModalOpen(true);
    }
  };

  const setProperlyLabel = Boolean(user) ? "Wyloguj" : "Zaloguj";

  return (
    <header className={style()}>
      <div className={style("logo-wrapper")}></div>
      <h1 className={style("title")}>Aplikacja testowa</h1>
      <button onClick={handleOnClick}>{setProperlyLabel}</button>
      <LoginForm
        handleOnClose={handleOnClose}
        isModalOpen={isModalOpen}
      ></LoginForm>
    </header>
  );
};
export default Header;
