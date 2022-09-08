import * as React from "react";
import { render } from "react-dom";

import styles from "./styles.module.scss";
import "./global.scss"

render(<div className={styles.title}>React app1222211</div>, document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}