import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<MyApp />, document.getElementById("test1"));
ReactDOM.render(<MyInfo />, document.getElementById("root"));
ReactDOM.render(<Footer />, document.getElementById("footer"));

import MyInfo from "./components/MyInfo.js";
import MyApp from "./components/MyApp.js";
import Footer from "./components/Footer.js";
