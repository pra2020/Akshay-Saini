import React from "react";
import ReactDOM from "react-dom/client";


const FunctionalComp = () => {
  return <h1>Functional Comp</h1>
}

const elem = <span>normal element, <FunctionalComp/></span>

const FuncComp = () => <h1>Func Comp</h1>

const num = 1000;

// for mutli-line 
const FuncComponent = () => (
  <>

  {FuncComp()}
  <div>Hello Func Comp</div>
  <h3>{num + 500}</h3>  
  {elem}
  <FuncComp/>
  <FunctionalComp/>
  </>
  );

// JSX - HTML like syntax
// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FuncComponent/>);