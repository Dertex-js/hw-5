import React, {useEffect, useState} from "react";

import CoinPageStore from "store/CoinPageStore";
import { useLocalStore } from "utils/useLocalStore";
import style from "./CoinPage.module.scss";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import CoinInfo from "./components/CoinInfo";
import Navigation from "./components/Navigation";
import {Sparklines, SparklinesLine} from "react-sparklines";

import BtnGroup from "./components/BtnGroup";
import Card from "components/Card";
import {price} from "config/_mockCoinGraphData";

const CoinPage = () => {
  const coinPageStore = useLocalStore(() => new CoinPageStore());

  const [graphData, setGraphData] = useState<number[]>(price.slice(price.length / 7 * 6 - 1, price.length - 1));
  const clickHandler = (price: number[]) => {
    setGraphData(price);
  };

  const { id } = useParams();

  useEffect(() => {
    coinPageStore.requestCoin(id);
  }, [id, coinPageStore]);

  return (
    <div className={style.wrapperCoinPage}>
      {coinPageStore.data && (
        <Navigation
          key={coinPageStore.data.id}
          image={coinPageStore.data.image.small}
          title={coinPageStore.data.name}
          subtitle={coinPageStore.data.symbol.toUpperCase()}
        />
      )}
      {coinPageStore.data && (
        <CoinInfo
          price={coinPageStore.data.marketData.currentPrice.usd}
          priceChangeValue={coinPageStore.data.marketData.priceChange24h}
          priceChangePercent={
            coinPageStore.data.marketData.priceChangePercentage24h
          }
        />
      )}
      {coinPageStore.data && (
        <Sparklines
          data={graphData}
          width={100}
          height={72.267}
          style={{marginBottom: "38px"}}
        >
          <SparklinesLine color="#0063F5" style={{ fill: "none" }} />
        </Sparklines>
      )}
      <BtnGroup onClick={clickHandler}/>
      <div className={style.transactions}>
        {coinPageStore.data && (
          <Card
            image={coinPageStore.data.image.small}
            title={coinPageStore.data.name}
            subtitle={"00.00 " + coinPageStore.data.symbol.toUpperCase()}
            price={"00.00"}
            pricePerCent={"00.00"}
          />
        )}
        <div className={style.transactions__card}>Transactions</div>
      </div>
    </div>
  );
};

export default observer(CoinPage);
