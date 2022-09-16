import React from "react";

import Logo from "assets/input-search.png";
import Button from "components/Button";
import Card from "components/Card";
import { searchItemsModel } from "store/models/search/searchItems";
import SearchStore from "store/SearchStore";
import { useLocalStore } from "utils/useLocalStore";
import { observer } from "mobx-react-lite";
import { Link, useSearchParams } from "react-router-dom";
import style from "./Search.module.scss";

const Search = () => {
  const searchStore = useLocalStore(() => new SearchStore());
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("query") || "";
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    if (query) {
      setSearchParams({ query });
      searchStore.requestCoins(query);
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className={style.wrapperSearch}>
      <section className={style.search}>
        <div className={style.searchInput}>
          <img className={style.searchInput__ico} src={Logo} alt="Search" />
          <input
            className={style.searchInput__input}
            type="text"
            placeholder="Search Cryptocurrency"
            onChange={handleSearch}
            value={searchTerm}
          />
        </div>
        <Link to={"/"} className={style.search__btn}>
          <Button />
        </Link>
      </section>
      <section className={style.coins__list}>
        {searchStore.data.map((coin: searchItemsModel) => (
          <Link to={`/coin/${coin.id}`} key={coin.id}>
            <Card
              key={coin.id}
              image={coin.large}
              title={coin.name}
              subtitle={coin.symbol.toUpperCase()}
            />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default observer(Search);
