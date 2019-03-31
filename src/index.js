import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

ReactDOM.render(<MyApp />, document.getElementById("test1"));
ReactDOM.render(<MyInfo />, document.getElementById("root"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
ReactDOM.render(<Header />, document.getElementById("header"));

function VariableTest1() {
  const firstName = "To";
  const lastName = "Do";
  const color1 = "#56755c";
  const backgroundColor1 = "#f2fff4";
  const style1 = {
    color: color1,
    backgroundColor: backgroundColor1,
    fontSize: "5vh",
    textAlign: "center"
  };
  return <h1 style={style1}>{firstName + " " + lastName} </h1>;
}

ReactDOM.render(<VariableTest1 />, document.getElementById("root"));
import Header from "./components/Header.js";
import MyInfo from "./components/MyInfo.js";
import MyApp from "./components/MyApp.js";
import Footer from "./components/Footer.js";
