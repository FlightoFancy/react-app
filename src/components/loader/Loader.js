import React from "react";
import s from "./loader.module.css";

const Loader = () => {
  return (
    <div className={s.preloader}>
      <div className={s.spinner}></div>
    </div>
  );
};

export default Loader;
