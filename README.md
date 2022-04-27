# get-started-react

# Jak działa React

Aplikacje z użyciem biblioteki JavaScript zwanej, i bardzo ostatnio popularnej, React tworwzy się przede wszystkim wykorzystując rozszerzenie języka JavaScript JSX, które jest oparte na na znacznikach podobnych do znaczników HTML. Jednakże aby poznać jak działa platforma React, należy poznać jej najmniejsze jednostki składowe czyli jej elementy. Następnie należy poznać komponenty, które składają się z innych komponentów i elementów.

## Elementy React

Gdy przeglądarka `WWW` wczyta kod `HTML` i wygeneruje interfejs użytkownika to elementy `HTML` dokumentu stają się elementami modelu `DOM`, a powiązane ze sobą elementy tworzą hierarchię w postaci drzewa.

Technologia `AJAX` (_ang. asynchronous javascript and xml_) [pozwala tworzyć aplikacje w postaci pojedynczej strony (_ang. single-page application_)](https://pl.wikipedia.org/wiki/Single_Page_Application).
Kiedy użytkownik porusza się po takiej stronie, `JavaScript` niszczy poprzedni interfejs użytkownika i tworzy nowy.

[API modelu DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) to kolekcja obiektów używanych przez `JavaScript` do pracy z przeglądarką WWW i modyfikacji modelu DOM.

`React` to biblioteka zaprojektowana do uaktualniania modelu `DOM` w przeglądarce `WWW`.

Model `DOM` biblioteki `React` składa się z elementów `Reacta`. Element Reacta to opis przedstawiający, jak powinien wyglądać element modelu `DOM`.

## Jak powstają elementy React?

Mamy dwie możliwości tworzenia elementów React: czysty JS oraz JSX.
Elementy React można tworzyć na dwa sposoby:

1. Za pomocą składni JavaScript.
2. Za pomocą składni JSX.

Biblioteka `React` dysponuje metodą [`createElement()`](https://reactjs.org/docs/react-api.html#createelement):

```javascript
React.createElement(type, [props], [...children]);
```

Metoda tworzy i zwraca nowy element `React` danego typu. Argument `type` może być ciągiem nazwy znacznika (takim jak „div” lub „span”), `typem` komponentu `React` (klasa lub funkcja) lub typem fragmentu React.

Parametry metody:

- `type(string || componentReact)` - string reprezentujący element HTML lub instancja komponentu React, czyli referencja do klasy lub do funkcji tworzącej komponent React
- `props (null || object)` - obiekt zawierający dane przekazywane do elementu/komponentu wskazanego w pierwszym parametrze. Jeżeli tworzymy węzeł DOM, a nazwa właściwości `props` jest poprawnym atrybutem HTML, to zostanie ona przypisana bezpośrednio do wygenerowanego elementu. W przypadku komponentów, obiekt `props` jest przekazywany do nich, jako parametr (komponenty funkcyjne) lub właściwość (komponenty klasowe).

* `children(null || string || React.createElement)` – ostatni parametr decyduje o zawartości elementu. Może to być zwykły tekst, instancja komponentu React lub kolejny element React.

Podczas generowania strony `React` skonwertuje element utworzony za pomocą metody `React.createElement()` na postać rzezczywistego elementu modelu `DOM`. Właściwości są jako atrybuty dodawane do znaczników.

Element biblioteki `React` to zwykły literał obiektowy `JavaScriptu` wskazujący jej sposób utworzenia elementu modelu DOM.

>Koncentrujemy się na obiekcie zwróconym przez funkcję React.createElement(). Te elementy nie są tworzone >ręcznie przez programistę, lecz za pomocą tej funkcji.


Element React `section` zawierający inny potomny element React `div`, posługując się składnią `JSX`, definiujemy następująco:

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
'use strict';

const element = /*#__PURE__*/ React.createElement(
  'section',
  null,
  /*#__PURE__*/ React.createElement(
    'div',
    {
      id: 'app',
      key: 'index',
      className: 'app',
    },
    'Pierwszy'
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

Weżmy inny przykład tworzenia listy nieuporządkowanej:

```jsx
const list = (
  <ul>
    <li>ListItem1</li>
    <li>ListItem2</li>
    <li>ListItem3</li>
    <li>ListItem4</li>
    <li>ListItem5</li>
  </ul>
)
```

Po transpilacji otrzymamy

```javascript
"use strict";

const list = /*#__PURE__*/ React.createElement(
  "ul",
  null,
  /*#__PURE__*/ React.createElement("li", null, "ListItem1"),
  /*#__PURE__*/ React.createElement("li", null, "ListItem2"),
  /*#__PURE__*/ React.createElement("li", null, "ListItem3"),
  /*#__PURE__*/ React.createElement("li", null, "ListItem4"),
  /*#__PURE__*/ React.createElement("li", null, "ListItem5")
);
```

```console
$$typeof: Symbol(react.element)
key: null
props:
children: Array(5)
0:
$$typeof: Symbol(react.element)
key: null
props: {children: 'ListItem1'}
ref: null
type: "li"
_owner: null
_store: {validated: true}
_self: null
_source: null
[[Prototype]]: Object
1: {$$typeof: Symbol(react.element), type: 'li', key: null, ref: null, props: {…}, …}
2: {$$typeof: Symbol(react.element), type: 'li', key: null, ref: null, props: {…}, …}
3: {$$typeof: Symbol(react.element), type: 'li', key: null, ref: null, props: {…}, …}
4: {$$typeof: Symbol(react.element), type: 'li', key: null, ref: null, props: {…}, …}
length: 5
[[Prototype]]: Array(0)
[[Prototype]]: Object
ref: null
type: "ul"
_owner: null
_store: {validated: false}
_self: null
_source: null
[[Prototype]]: Object
```






Bibliografia:

1. Eve Porcello, Alex Banks: _React od podstaw. Nowoczesne wzorce tworzenia aplikacji_. Gliwice: Helion, 2021. ISBN: 978-83-283-7290-0
2. https://typeofweb.com/wprowadzenie-kurs-react-js: React.js: Wprowadzenie do kursu od podstaw.
3. David Flanagan: _JavaScript. Przewodnik. Poznaj język mistrzów programowania._. Gliwice: Helion, 2021. ISBN: 978-83-283-7309-9
4. Ved Antani, Stoyan Stevanow: _Programowanie zorientowane obiektowo w języku JavaScript_. Gliwice: Helion, 2018. ISBN: 978-83-283-3783-1
5. http://www.algosmart.pl/elementy-react-jsx: Elementy React i JSX – Pierwszy projekt w ReactJS #2
