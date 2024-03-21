// created h1 element: the empty object is used to pass attribute to the tags and 3rd param is the children (value passed to h1)
const heading = React.createElement("h1", { id: "heading", xyz: "abc"}, "Hello from React");

// basically the element formed is object
console.log(heading);

// put h1 into React DOM by using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// render heading(element as an object) inside this root
root.render(heading);
