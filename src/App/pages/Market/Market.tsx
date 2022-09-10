import React from "react";

import "./Market.scss";
import {Sparklines, SparklinesLine} from 'react-sparklines';
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

  return (
    <div className="wrapper-market">
      <section className="title">
        <div className="title__text">
          <h2 className="title__info bold">
            Market is down <span className="fall backend">- 11.17%</span>
          </h2>
          <p className="title__descr">In the past 24 hours</p>
        </div>
        <button className="title__search">
          <Link to={"/search"}>
            <img src={searchLogo} alt="search" />
          </Link>
        </button>
      </section>
      <section className="filter">
        <h1 className="filter__title bold">Coins</h1>
        <div className="dropdown" role="button" tabIndex={0}>
          Market- INR
          <img className="dropdown__ico" src={dropDownIco} alt="Drop down" />
        </div>
      </section>
      <nav className="categories">
        <ul className="categories__list">
          <li className="categories__list-item categories__list-item_active">
            <Link to={"#"}>
              <div className="categories__link">All</div>
            </Link>
          </li>
          <li className="categories__list-item">
            <Link to={"#"}>
              <div className="categories__link">Gainer</div>
            </Link>
          </li>
          <li className="categories__list-item">
            <Link to={"#"}>
              <div className="categories__link">Loser</div>
            </Link>
          </li>
          <li className="categories__list-item">
            <Link to={"#"}>
              <div className="categories__link">Favourites</div>
            </Link>
          </li>
        </ul>
      </nav>
      <section className="coins">
        <InfiniteScroll onBottomHit={loadMoreCoins}>
          {marketStore.data.map((coin: marketItemsModel) => (
            <Link to={`/coin/${coin.id}`} key={coin.id}>
              <Card
                key={coin.id}
                image={coin.image}
                title={coin.name}
                subtitle={coin.symbol.toUpperCase()}
                content={
                  <Sparklines
                      data={coin.sparklineIn7d.price}
                      height={120}
                  >
                    <SparklinesLine
                        color="#21BF73"
                        style={{ fill: "none" }}
                    />
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
