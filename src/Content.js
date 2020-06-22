import React from "react";

const Content = ({ content, query }) => {
  if (query) {
    content = content.replace(
      new RegExp(query, "gi"),
      "<highlight>$&</highlight>"
    );
  }
  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export default Content;
