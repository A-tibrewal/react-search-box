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


String.prototype.containsString = function (char) {
    char = char.toLowerCase();
    var index = this.toLowerCase().indexOf(char);
    if (index === -1) {
        return false;
    } else {
        return true;
    }
};