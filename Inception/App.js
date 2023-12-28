import React from 'react';
import ReactDOM from 'react-dom';

const h1 = React.createElement('h1', { id: 'heading' }, 'Namaste React'); // returns an object

const nestedStructure = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', { id: 'h1' }, 'H1 tag'),
    React.createElement('h2', { id: 'h2' }, 'H2 tag'),
  ]),
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', { id: 'h1' }, 'H1 tag'),
    React.createElement('h2', { id: 'h2' }, 'H2 tag'),
  ]),
]);

const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(nestedStructure);
