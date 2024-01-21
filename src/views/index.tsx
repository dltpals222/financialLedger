import * as React from 'react';
import * as ReactDom from 'react-dom';

const App = () => {
  return (
  <>
    <h1>Hello World</h1>
  </>
  );
};

ReactDom.render(<App />, document.getElementById('root'));