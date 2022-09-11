import React from "react";

import "./Card.scss";

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
    <div className="coin" onClick={onClick}>
      <div className="coin-name">
        <img className="coin-name__img" src={image} alt="coin" />
        <div className="coin-name-text">
          <div className="coin-name-text__title">{title}</div>
          <div className="coin-name-text__descr">{subtitle}</div>
        </div>
      </div>
      <div className="coin__graph">{graph}</div>
      <div className="coin-price">
        <div className="coin-price__value">${price}</div>
      <div className="coin-price__change">{pricePerCent}%</div>
    </div>
    </div>
  );
};

export default Card;
