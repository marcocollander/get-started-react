# get-started-react

## Elementy React

Element React `section` zawierający inny potomny element React `div`, posługując się składnią `JSX`, definiujemy
następująco:
 
> Uwzględniając, że jeśli umieszczamy kod w wielu liniach jak w poniższym wyrażeniu i chcemy, aby interpreter traktował 
> go jako jedno integralne wyrażenie to umieszczamy go w nawiasach okrągłych, zabezpieczając jednocześnie się przed 
> automatycznym
> [wstawianiem średnika](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)

```jsx
const elem = (
  <section>
    <div id="app" className="app" key="index">
      Hello world!
    </div>
  </section>
);
```

Powyższy kod `JSX` zostanie przez kompilator `Babel` skompilowany do składni `JavaScript` jak niżej:

```js
"use strict";

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
```

Jeśli wyświetlimy w konsoli:

```javascript
console.log(elem);
console.log(element);
```

To otrzymamy ten sam wydruk:

```console
{
    $$typeof: Symbol(react.element)
    "type": "section",
    "key": null,
    "ref": null,
    "props": {
        "children": {
            "type": "div",
            "key": "index",
            "ref": null,
            "props": {
                "id": "app",
                "className": "app",
                "children": "Pierwszy"
            },
            "_owner": null,
            "_store": {}
        }
    },
    "_owner": null,
    "_store": {}
}
```
