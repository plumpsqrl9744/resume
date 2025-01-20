import React from "react";
import ReactDOM from "react-dom/client"; // react-dom/client에서 import 해야 함

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
