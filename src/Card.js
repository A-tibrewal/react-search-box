import React, { useRef, useEffect } from "react";
import Content from "./Content";
import ListItemFound from "./ListItemFound";

const Card = ({ user, selected, query, setSelectedSuggestionIndex, index, focusSearchBox }) => {
  const cardEl = useRef(null);

  useEffect(() => {
    if (selected) {
      const {
        top: pTop,
        bottom: pBottom
      } = window.scrollParent.current.getBoundingClientRect();
      const {
        top: cTop,
        bottom: cBottom
      } = cardEl.current.getBoundingClientRect();
      if (pBottom < cBottom) {
        window.scrollParent.current.scrollBy({
          top: cBottom - pBottom,
          behaviour: "smooth"
        });
      } else if (cTop < pTop) {
        window.scrollParent.current.scrollBy({
          top: cTop - pTop,
          behaviour: "smooth"
        });
      }
    }
  }, [selected]);

  const handleMouseEnter = () => {
    setSelectedSuggestionIndex(index);
    focusSearchBox();
  }

  return (
    <div
      ref={cardEl}
      className={"card" + (selected ? " selected" : "")}
      tabIndex="1"
      onMouseMove={ handleMouseEnter }
    >
      <div className="card__id">
        <b>
          <Content query={query} content={user.id} />
        </b>
      </div>
      <div className="card__name">
        <i>
          <Content query={query} content={user.name} />
        </i>
      </div>
      <ListItemFound query={query} items={user.items} />
      <div className="card__address">
        <small>
          <Content query={query} content={user.address} />
        </small>
      </div>
      <div className="card__pincode">
        <small>
          <Content query={query} content={user.pincode} />
        </small>
      </div>
    </div>
  );
};

export default Card;
