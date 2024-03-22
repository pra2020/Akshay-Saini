import React from "react";
import ReactDOM from "react-dom/client";

const FunctionalComp = () => {
  return <h1>Functional Comp</h1>
}

const FuncComp = () => <h1>Func Comp</h1>

// for mutli-line 
const FuncComponent = () => (
  <>
  <div>Hello Func Comp</div>
  <FuncComp/>
  <FunctionalComp/>
  </>
  );

// JSX - HTML like syntax
// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FuncComponent/>);