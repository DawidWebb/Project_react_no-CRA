import React, { useContext } from "react";
import bemCssModule from "bem-css-modules";

import { StoreContext } from "../../store/StoreProvider";
import Course from "../Course/Course";

import { default as UserStyles } from "./User.module.scss";

const style = bemCssModule(UserStyles);

const User = () => {
  const { user, courses } = useContext(StoreContext);

  const boughtCourses = courses
    .filter((course) => user.courses.includes(course.id))
    .map((course) => (
      <Course isUserContext={true} key={course.id} {...course} />
    ));

  return (
    <section className={style()}>
      <h2 className={style("title")}>Twoje przedmioty</h2>
      <ul className={style("list")}>{boughtCourses}</ul>
    </section>
  );
};

export default User;
