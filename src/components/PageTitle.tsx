import React from "react";

type PageTitleProps = {
  text: string;
};

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return <h1 className="text-5xl font-semibold mb-3">{props.text}</h1>;
};

export default PageTitle;
