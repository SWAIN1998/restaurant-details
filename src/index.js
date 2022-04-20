import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Timer from "./Timer/Timer";

// import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <App /> */}
    <Timer/>
  </StrictMode>,
  rootElement
);
