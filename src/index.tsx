import * as React from "react";
import { render } from "react-dom";

import styles from "./styles.module.scss";

import logo from "./input-search.png";

render(
    <div className={styles.title}>
        React app1222211
        <div className={styles.picture} style={{backgroundImage: `url(${logo})`}}/>
    </div>,
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept();
}