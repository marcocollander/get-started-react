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
