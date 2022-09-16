import React from "react";

import style from "./Card.module.scss";

export type CardProps = {
  image: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  price?: React.ReactNode;
  pricePerCent?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  graph?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  price,
  pricePerCent,
  onClick,
  graph,
}) => {
  return (
    <div className={style.coin} onClick={onClick}>
      <div className={style.coinName}>
        <img className={style.coinName__img} src={image} alt="coin" />
        <div className={style.coinNameText}>
          <div className={style.coinNameText__title}>{title}</div>
          <div className={style.coinNameText__descr}>{subtitle}</div>
        </div>
      </div>
      <div className={style.coin__graph}>{graph}</div>
      <div className={style.coinPrice}>
        <div className={style.coinPrice__value}>${price}</div>
        <div className={style.coinPrice__change}>{pricePerCent}%</div>
      </div>
    </div>
  );
};

export default Card;
