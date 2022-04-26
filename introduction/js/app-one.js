// import * as ReactDOM from "react-dom/client";
// import React from "react";
// import ReactDOM from "react-dom";

// console.log(React);
// console.log(ReactDOM);

// console.log(ReactDOMClient);

const elem = (
  <section>
    <div id="app" key="index" className="app">
      Element React
    </div>
  </section>
);

console.log(elem);

// Kod po transpilacji Babel

const element = /*#__PURE__*/ React.createElement(
  "section",
  null,
  /*#__PURE__*/ React.createElement(
    "div",
    {
      id: "app",
      key: "index",
      className: "app",
    },
    "Pierwszy"
  )
);

console.log(element);
