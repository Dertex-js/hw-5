import React from "react";
import style from "./TimeLine.module.scss";
import Logo from "assets/timeLine.png";
import { time } from "config/_mockTimeLine";

const TimeLine = () => {
  return (
    <div className={style.timeLine}>
      <img className={style.timeLine__line} src={Logo} alt="timeline"/>
      <div className={style.timeLine__time}>
        <div className={style.timeLine__time_item}>{time[0]}</div>
        <div className={style.timeLine__time_item}>{time[1]}</div>
        <div className={style.timeLine__time_item}>{time[2]}</div>
        <div className={style.timeLine__time_item}>{time[3]}</div>
        <div className={style.timeLine__time_item}>{time[4]}</div>
      </div>
    </div>
  );
};

export default TimeLine;