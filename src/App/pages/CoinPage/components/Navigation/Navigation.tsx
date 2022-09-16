import React from "react";

import Logo from "assets/go_back.svg";
import Favorites from "assets/add-to-favorite.svg";
import { routes } from "config/routes";
import style from "./Navigation.module.scss";
import { Link } from "react-router-dom";

type NavigationProps = {
  image: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
};

const Navigation: React.FC<NavigationProps> = ({ image, title, subtitle }) => {
  return (
    <section className={style.nav}>
      <Link to={routes.market} className={style.nav__link}>
        <img src={Logo} alt={style.nav__link_back} />
      </Link>

      <div className={style.navInfo}>
        <img className={style.navInfo__ico} src={image} alt="Back" />
        <div className={style.navInfo__name_title}>{title}</div>
        <div className={style.navInfo__name_subtitle}>({subtitle})</div>
      </div>

      <img src={Favorites} className={style.navFavorites} alt="Add to favorites" />
    </section>
  );
};

export default React.memo(Navigation);
