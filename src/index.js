import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

console.log('ReactDOM');
console.log(chrome.runtime.id);

const elem = document.createElement('div');
document.body.appendChild(elem);

ReactDOM.render(
  <div>{title}</div>,
  elem
);