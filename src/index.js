import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

const title = 'My Minimal React Webpack Babel Setup d';

console.log('ReactDOM');
console.log(chrome.runtime.id);

const elem = document.createElement('div');
document.body.appendChild(elem);

const containerSyle = {
  zIndex    : 1000000,
  position  : 'fixed',
  width     : 200,
  height     : 300,
  right     : 10,
  top       : 10,
  background: 'red'
}

ReactDOM.render(
  (
  <div >
   <Draggable handle="strong">
     <div style={containerSyle} className="box no-cursor">
       <strong className="cursor"><div>Drag here</div></strong>
       <div>You must click my handle to drag me</div>
     </div>
     </Draggable>
   <style dangerouslySetInnerHTML={{__html: `
     .react-draggable, .cursor {
       cursor: move;
     }
     .no-cursor {
       cursor: auto;
     }
   `}} />
   </div>
   
  ),
  elem
);