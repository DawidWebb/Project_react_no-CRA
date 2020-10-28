import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import bemCssModules from "bem-css-modules";

import { default as ContentStyles } from "./Content.module.scss";
import { StoreContext } from "../../store/StoreProvider";

import Courses from "../Courses/Courses";

const style = bemCssModules(ContentStyles);

const ADMIN_TYPE = 1;

const Content = () => {
  const { user } = useContext(StoreContext);

  const isUserLogged = Boolean(user);
  const isAdmin = user?.accessLevel === ADMIN_TYPE;

  return (
    <main className={style()}>
      <Switch>
        <Route exact path="/" render={() => <Courses />} />
        {isUserLogged && (
          <Route exact path="/my-staffy" render={() => <p>STAFF</p>} />
        )}
        {isAdmin && <Route exact path="/manage" render={() => <p>ADMIN</p>} />}
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default Content;
