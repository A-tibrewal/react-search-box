import React from "react";

const ListItemFound = ({ query, items }) => {
  let message;
  if (items.length && items.containsString(query)) {
    message = (
      <div className="item-found">
        <span class="list-dot"></span>
        {`"${query}" found in items`}
      </div>
    );
  } else {
    message = ``;
  }
  return <div>{message}</div>;
};

export default ListItemFound;
