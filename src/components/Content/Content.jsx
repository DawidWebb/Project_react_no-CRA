import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import bemCssModules from "bem-css-modules";

import { default as ContentStyles } from "./Content.module.scss";
import { StoreContext } from "../../store/StoreProvider";

import Courses from "../Courses/Courses";
import User from "../User/User";
import AdminPanel from "../AdminPanel/AdminPanel";

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
          <Route exact path="/my-staffy" render={() => <User />} />
        )}
        {isAdmin && (
          <Route exact path="/manage" render={() => <AdminPanel />} />
        )}
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default Content;
