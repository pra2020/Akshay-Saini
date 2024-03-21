// this react ois getting fetched from node modules react pkg
import React from "react";
import ReactDOM from "react-dom/client";

{
  /* <div id="parent">
    <div id="child">
    <h1>I m h1 tag</h1>
    <h2>I m h1 tag</h2>
    </div>
    <div id="child2">
    <h1>I m h1 tag</h1>
    <h2>I m h1 tag</h2>
    </div>
</div> */
}

// React element is object and the browser understands the html : so it converts
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I m h1 tag"),
    React.createElement("h2", {}, "I m h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I m h1 tag"),
    React.createElement("h2", {}, "I m h2 tag"),
  ]),
]);


// basically the element formed is object
console.log(parent);

// put h1 into React DOM by using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// render (element as an object) inside this root: 
// Note: If there are existing tags in root div, then they will get replaced/override by parent content
root.render(parent);
