import React, { useEffect } from "react";

import CoinPageStore from "store/CoinPageStore";
import { useLocalStore } from "utils/useLocalStore";
import style from "./CoinPage.module.scss";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import CoinInfo from "./components/CoinInfo";
import Navigation from "./components/Navigation";

const CoinPage = () => {
  const coinPageStore = useLocalStore(() => new CoinPageStore());

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
    </div>
  );
};

export default observer(CoinPage);
