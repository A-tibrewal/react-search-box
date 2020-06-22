import React from "react";
import Card from "./Card";

const SuggestionList = ({
  setSelectedSuggestionIndex,
  suggestions,
  query,
  selectedSuggestionIndex,
  focusSearchBox
}) => {
  const suggestionsList = suggestions.map((item, index) => (
    <Card
      focusSearchBox={focusSearchBox}
      setSelectedSuggestionIndex={setSelectedSuggestionIndex}
      query={query}
      scrollParent={scrollParent}
      selected={selectedSuggestionIndex === index}
      index={index}
      key={item.id}
      user={item}
    />
  ));
  const noSuggestions = <div className="no-user-card"> No User Found </div>;
  const suggestionsWrapper =
    query && suggestions.length
      ? suggestionsList
      : query
      ? noSuggestions
      : null;
  return suggestionsList;
};

export default SuggestionList;
