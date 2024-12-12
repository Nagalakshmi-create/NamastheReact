/**
*
*
*  <div id="parent">
        <div id="child1">
            <h1>I am an h1 tag</h1>
            <h2>I am an h2 tag</h2>
        </div>
        <div id="child2">
            <h1>I am an h1 tag</h1>
            <h2>I am an h2 tag</h2>
        </div>
    </div>
*
*   ReactElement is an object
*   ReactRender will take that object and will convert it into an HTML which can be understand by browser
*/


// const heading = React.createElement("h1", {id: "heading"}, "Hello world from React!");

const parent = React.createElement("div", { id: "child" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")]
    ), React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")]
    )]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);