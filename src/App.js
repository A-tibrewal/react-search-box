import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './Searchbox';


const App = () => {
    return (
        <div>
            <SearchBox />
        </div>
    )
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));


