import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const ele = <span>React Element</span>;

const Title = () => <h1 className="head">Namsthe React using JSX {ele}</h1>;

const HeadingComponent1 = () => {
  return <h1>Namasthe React using Functional component</h1>;
};

const HeadingComponent2 = () => (
  <div id="container">
    <h2>{ele}</h2>
    {Title()}
    <Title />
    <h1 className="headsing">Namasthe React using Functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);
