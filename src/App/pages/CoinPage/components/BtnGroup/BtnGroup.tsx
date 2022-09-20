import React from "react";
import style from "./BtnGroup.module.scss";

const BtnGroup = () => {
  return (
    <div className={style.buttons}>
      <button className={style.button}>1 H</button>
      <button className={style.button + " " + style.active}>24 H</button>
      <button className={style.button}>1 W</button>
      <button className={style.button}>1 M</button>
      <button className={style.button}>6 M</button>
      <button className={style.button}>1 Y</button>
      <button className={style.button}>All</button>
    </div>
  );
};

export default BtnGroup;