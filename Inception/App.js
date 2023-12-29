import React from 'react';
import ReactDOM from 'react-dom/client';

// const h1 = React.createElement('h1', { id: 'heading' }, 'Namaste React'); // returns an object

// const nestedStructure = React.createElement('div', { id: 'parent' }, [
//   React.createElement('div', { id: 'child1' }, [
//     React.createElement('h1', { id: 'h1' }, 'H1 tag'),
//     React.createElement('h2', { id: 'h2' }, 'H2 tag'),
//   ]),
//   React.createElement('div', { id: 'child1' }, [
//     React.createElement('h1', { id: 'h1' }, 'H1 tag'),
//     React.createElement('h2', { id: 'h2' }, 'H2 tag'),
//   ]),
// ]);

/*------------------------------------------------using JSX-------------------------------------------*/

// const heading = <h1 className="heading">Inception</h1>;
// console.debug(heading);

/*-----------------------------------------------Adding Functional Components-------------------------------------------*/

function Title() {
  return <h1 id="heading">Inception</h1>;
}

function HeadingComponent() {
  return (
    <div className="container">
      <Title />
      <h2>Functional Component</h2>
    </div>
  );
}

const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<HeadingComponent />);
