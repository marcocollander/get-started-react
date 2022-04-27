let list = (
  <ul>
    <li>ListItem1</li>
    <li>ListItem2</li>
    <li>ListItem3</li>
    <li>ListItem4</li>
    <li>ListItem5</li>
  </ul>
);

console.log(list);

list = /*#__PURE__*/ React.createElement(
  'ul',
  null,
  /*#__PURE__*/ React.createElement('li', null, 'ListItem1'),
  /*#__PURE__*/ React.createElement('li', null, 'ListItem2'),
  /*#__PURE__*/ React.createElement('li', null, 'ListItem3'),
  /*#__PURE__*/ React.createElement('li', null, 'ListItem4'),
  /*#__PURE__*/ React.createElement('li', null, 'ListItem5')
);

console.log(list);
