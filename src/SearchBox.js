import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import SuggestionList from "./SuggestionList";
import NotFound from './NotFound';

const SearchBox = () => {
  const inputEl = useRef(null);
  const scrollParent = useRef(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filtered, setFilteredSuggestion] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

  useEffect(() => {
    fetch("http://www.mocky.io/v2/5ba8efb23100007200c2750c")
      .then(res => res.json())
      .then(json => {
        setSuggestions(json);
      });
  }, []);

  useEffect(() => {
    window.scrollParent = scrollParent;
  }, []);

  const containsSubstring = (str, fullStr) => {
    if (Array.isArray(fullStr)) {
      fullStr = fullStr.join(" ");
    }

    let searchString = str.toLowerCase();
    let mainString = fullStr.toLowerCase();
    return mainString.indexOf(searchString) !== -1;
  };

  const searchUsers = () => {
    if (!query) {
      return suggestions;
    }
    var filtered = suggestions.filter(function(item) {
      const {
        id = "",
        name = "",
        items = "",
        address = "",
        pincode = ""
      } = item;
      return (
        containsSubstring(query, id) ||
        containsSubstring(query, name) ||
        containsSubstring(query, items) ||
        containsSubstring(query, address) ||
        containsSubstring(query, pincode)
      );
    });
    setFilteredSuggestion(filtered);
  };

  useEffect(() => {
    searchUsers();
  }, [query]);

  const handleInputChange = event => {
    const query = event.target.value;
    setQuery(query);
  };

  const handleKeyDown = event => {
    let selected,
      length = filtered.length;
    if (!length) {
      return;
    }
    if (event.keyCode == 40) {
      event.preventDefault();
      selected = (selectedSuggestionIndex + 1) % length;
    } else if (event.keyCode == 38) {
      event.preventDefault();
      if (selectedSuggestionIndex == -1 || selectedSuggestionIndex == 0) {
        selected = length - 1;
      } else {
        selected = (selectedSuggestionIndex - 1) % length;
      }
    } else {
      selected = -1;
    }
    setSelectedSuggestionIndex(selected);
  };

  const focusSearchBox = ()=> {
    inputEl.current.focus();
   }

  return (
    <div className="form-wrapper">
      <div className="form">
        <input
          className="field"
          ref={inputEl}
          tabIndex="1"
          id="input-search-field"
          value={query}
          onKeyDown={handleKeyDown}
          placeholder="Search users by Id, name and address"
          onChange={handleInputChange}
        />
        <div id="all-suggestions" ref={scrollParent}>
          { query && filtered.length ? <SuggestionList
            focusSearchBox={focusSearchBox}
            setSelectedSuggestionIndex={setSelectedSuggestionIndex}
            scrollParent={scrollParent}
            selectedSuggestionIndex={selectedSuggestionIndex}
            suggestions={filtered}
            query={query }
          /> : ( query ? <NotFound/>  : null )}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
