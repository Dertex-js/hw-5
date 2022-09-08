import * as React from "react";
import { render } from "react-dom";
import 'regenerator-runtime';

import styles from "./styles.module.scss";

import logo from "./input-search.png";

import Button from "components/Button";


render(
    <div className={styles.title}>
        React app1222211
        <div className={styles.picture} style={{
            backgroundImage: `url(${logo})`
        }} />
        <Button object={null}>Кнопка</Button>
    </div>,
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept();
}