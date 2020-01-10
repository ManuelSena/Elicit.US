import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppRouter } from "./router";
import * as serviceWorker from "./build/serviceWorker";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
ReactDOM.render(React.createElement(AppRouter, null), document.getElementById("root"));
serviceWorker.unregister()
//# sourceMappingURL=index.js.map
