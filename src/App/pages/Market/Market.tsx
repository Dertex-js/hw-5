import React from "react";

import style from "./Market.module.scss";
import { Sparklines, SparklinesLine } from "react-sparklines";
import dropDownIco from "assets/dropdown-ico.svg";
import searchLogo from "assets/search.svg";
import Card from "components/Card";
import InfiniteScroll from "components/InfiniteScroll";
import MarketStore from "store/MarketStore";
import { marketItemsModel } from "store/models/market/marketItems";
import { useLocalStore } from "utils/useLocalStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const Market = () => {
  const marketStore = useLocalStore(() => new MarketStore());

  const loadMoreCoins = () => {
    marketStore.requestCoins();
  };

  const colorSparkline = (first: number, end: number): string => {
    if (end >= first) {
      return "#21BF73";
    } else {
      return "#D90429";
    }
  };

  return (
    <div className={style.wrapperMarket}>
      <section className={style.title}>
        <div className={style.title__text}>
          <h2 className={style.title__info + " " + style.bold}>
            Market is down <span className={style.fall + " " + style.backend}>- 11.17%</span>
          </h2>
          <p className={style.title__descr}>In the past 24 hours</p>
        </div>
        <button className={style.title__search}>
          <Link to={"/search"}>
            <img src={searchLogo} alt="search" />
          </Link>
        </button>
      </section>
      <section className={style.filter}>
        <h1 className={style.filter__title + " " + style.bold}>Coins</h1>
        <div className={style.dropdown} role="button" tabIndex={0}>
          Market- USD
          <img className={style.dropdown__ico} src={dropDownIco} alt="Drop down" />
        </div>
      </section>
      <nav className={style.categories}>
        <ul className={style.categories__list}>
          <li className={style.categories__listItem + " " + style.categories__listItem_active}>
            <Link to={"#"}>
              <div className={style.categories__link}>All</div>
            </Link>
          </li>
          <li className={style.categories__listItem}>
            <Link to={"#"}>
              <div className={style.categories__link}>Gainer</div>
            </Link>
          </li>
          <li className={style.categories__listItem}>
            <Link to={"#"}>
              <div className={style.categories__link}>Loser</div>
            </Link>
          </li>
          <li className={style.categories__listItem}>
            <Link to={"#"}>
              <div className={style.categories__link}>Favourites</div>
            </Link>
          </li>
        </ul>
      </nav>
      <section className={style.coins}>
        <InfiniteScroll onBottomHit={loadMoreCoins}>
          {marketStore.data.map((coin: marketItemsModel) => (
            <Link to={`/coin/${coin.id}`} key={coin.id}>
              <Card
                key={coin.id}
                image={coin.image}
                title={coin.name}
                subtitle={coin.symbol.toUpperCase()}
                price={coin.currentPrice.toFixed(2)}
                pricePerCent={coin.priceChangePercentage24h.toFixed(2)}
                graph={
                  <Sparklines
                    data={coin.sparklineIn7d.price.slice(
                      (coin.sparklineIn7d.price.length / 7 * 6) - 1,
                      coin.sparklineIn7d.price.length - 1
                    )}
                    height={120}
                  >
                    <SparklinesLine
                      color={colorSparkline(
                        coin.sparklineIn7d.price[(coin.sparklineIn7d.price.length / 7 * 6) - 1],
                        coin.sparklineIn7d.price[coin.sparklineIn7d.price.length - 1])}
                      style={{ fill: "none" }} />
                  </Sparklines>
                }
              ></Card>
            </Link>
          ))}
        </InfiniteScroll>
      </section>
    </div>
  );
};

export default observer(Market);
