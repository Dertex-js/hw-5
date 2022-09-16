import React, { FC } from "react";
import style from "./CoinInfo.module.scss";

type CoinInfoProps = {
  price: string;
  priceChangeValue: number;
  priceChangePercent: number;
};

const CoinInfo: FC<CoinInfoProps> = ({
  price,
  priceChangeValue,
  priceChangePercent,
}) => {
  const symbolPrice = () => {
    if (priceChangeValue > 0) {
      return "+ ";
    } else {
      return "- ";
    }
  };
  const value = priceChangeValue.toFixed(3);
  const percent = priceChangePercent.toFixed(2);

  return (
    <section className={style.coinInfo}>
      <div className={style.coinInfo__price}>${price}</div>
      <div className={style.coinInfo__change}>
        {symbolPrice()}
        {value} ({percent}%)
      </div>
    </section>
  );
};

export default React.memo(CoinInfo);
