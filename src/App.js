import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './SearchBox';
import Polyfill from './polyfill';

const App = () => {
  return (
      <div>
          <SearchBox/>
      </div>
  )
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));