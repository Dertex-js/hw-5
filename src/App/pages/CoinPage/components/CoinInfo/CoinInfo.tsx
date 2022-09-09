import React, {FC} from "react";
import "./CoinInfo.scss";

type CoinInfoProps = {
  price: string;
  priceChangeValue: number;
  priceChangePercent: number;
}

const CoinInfo: FC<CoinInfoProps> = ({price, priceChangeValue, priceChangePercent}) => {

  const symbolPrice = () => {
    if (priceChangeValue > 0) {
      return "+ ";
    } else {
      return "- ";
    }
  }
  const value = priceChangeValue.toFixed(3)
  const percent = priceChangePercent.toFixed(2)

  return <section className="coin-info">
    <div className="coin-info__price">${price}</div>
    <div className="coin-info__change">
      <div className="coin-info__change_value">{symbolPrice()}{value}</div>
      <div className="coin-info__change_percent">({percent}%)</div>
    </div>
  </section>;
};

export default React.memo(CoinInfo);
