import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import bemCssModules from "bem-css-modules";

import { default as CourseStyles } from "./Course.module.scss";
import request from "../../helpers/request";
import { StoreContext } from "../../store/StoreProvider";

const style = bemCssModules(CourseStyles);

const Course = ({ authors, id, img, isUserContext = false, price, title }) => {
  const { user, setUser } = useContext(StoreContext);
  const history = useHistory();

  const allAuthors = authors.join(", ");

  const isUserLogged = Boolean(user);

  const handleOnClick = async () => {
    try {
      const { data, status } = await request.patch("/users", {
        login: user.login,
        courseId: id,
      });

      if (status === 202) {
        setUser(data.user);
        history.push("/my-staffy");
      }
    } catch (error) {
      console.worn(error);
    }
  };
  const sholudBeBuyButtonVisible = isUserLogged && !isUserContext;
  return (
    <li>
      <article className={style()}>
        <h3 className={style("title")}></h3>
        <img src={img} alt={title} className={style("image")} />
        <p className={style("price")}>{`Koszt: ${price} eur`}</p>
        <p className={style("authors")}>{`Autorzy: ${allAuthors}`}</p>
        {sholudBeBuyButtonVisible && (
          <button onClick={handleOnClick}>Kup</button>
        )}
      </article>
    </li>
  );
};

export default Course;
