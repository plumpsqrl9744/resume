import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; // App.js에서 컴포넌트 가져오기
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // index.html의 <div id="root"></div>에 렌더링
);

reportWebVitals();
