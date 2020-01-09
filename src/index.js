import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppRouter } from "./router";
import * as serviceWorker from "./build/serviceWorker";
ReactDOM.render(React.createElement(AppRouter, null), document.getElementById("root"));
serviceWorker.register()
//# sourceMappingURL=index.js.map
