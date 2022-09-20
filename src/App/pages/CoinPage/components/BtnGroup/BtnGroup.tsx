import React, {FC} from "react";
import style from "./BtnGroup.module.scss";
import {price} from "config/_mockCoinGraphData";

type BtnGroupProps = {
    onClick: (price: number[]) => void;
}

const BtnGroup: FC<BtnGroupProps> = ({ onClick }) => {
  return (
    <div className={style.buttons}>
      <button
        className={style.button}
        onClick={() => {onClick(price.slice(price.length / 7 * 6 - 1, price.length - 1));}}
      >1 H
      </button>
      <button className={style.button} onClick={() => onClick(price.slice(price.length / 7 * 5 - 1, price.length - 1))}>24 H</button>
      <button className={style.button} onClick={() => onClick(price.slice(price.length / 7 * 4 - 1, price.length - 1))}>1 W</button>
      <button className={style.button} onClick={() => onClick(price.slice(price.length / 7 * 3 - 1, price.length - 1))}>1 M</button>
      <button className={style.button} onClick={() => onClick(price.slice(price.length / 7 * 2 - 1, price.length - 1))}>6 M</button>
      <button className={style.button} onClick={() => onClick(price.slice(price.length / 7 - 1, price.length - 1))}>1 Y</button>
      <button className={style.button} onClick={() => onClick(price)}>All</button>
    </div>
  );
};

export default BtnGroup;