import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id:"heading",xyz:"xyz"},"Hello world from React!");// {} indiacate the attribute to the tag like class,id etc all which we gives to html tag, 3rd parameter is the content inside the tag and props 
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


/**
 * <div id="parent">
 *      <div id="child">
 *         <h1></h1>    
 *    </div>
 * </div>
 * 
 */

// const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"Hello from nested h1"))); // it is react element which is javascript object  and it is created using createElement method of react
// ReactElement(object)  => HTML(Browser Understand) 
// it convert the object into html


// console.log(parent);
// root.render(parent);


/**
 * <div id="parent1">
 *      <div id="child1">
 *         <h1></h1> 
 *        <h2></h2>   
 *    </div>
 * </div>
 * 
 */

// const parent1 = React.createElement("div",{id:"parent1"},React.createElement("div",{id:"child1"},[React.createElement("h1",{},"Hello from nested h1"),React.createElement("h2",{},"Hello from nested h2")]));

// root.render(parent1);


/**
 * <div id="parent2">
 *      <div id="child1">
 *         <h1></h1> 
 *        <h2></h2>   
 *    </div>
 *    <div id="child2">
 *         <h1></h1> 
 *        <h2></h2>   
 *    </div>
 * </div>
 * 
 */

const parent2 = React.createElement("div",{id:"parent2"},[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"This is Namaste React "),React.createElement("h2",{},"I'm h2 tag from child 1")]),React.createElement("div",{id:"child 2"},[React.createElement("h1",{},"I'm h1 tag from child 2"),React.createElement("h2",{},"I'm h2 tag from child 2")])]);

root.render(parent2);


