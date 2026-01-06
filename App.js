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

//const parent2 = React.createElement("div",{id:"parent2"},[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"This is Namaste React "),React.createElement("h2",{},"I'm h2 tag from child 1")]),React.createElement("div",{id:"child 2"},[React.createElement("h1",{},"I'm h1 tag from child 2"),React.createElement("h2",{},"I'm h2 tag from child 2")])]);

//root.render(parent2);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// React Element 

//JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => Babel transpiles it to React.createElement => ReacetElement- JS Object => HTMLElement(render)
const JsxHeading = (<h1  className="head">Namaste react using jsx</h1>)

//React Component
const Title = () => (<h1  className="head">Namaste react using jsx</h1>)

const HeadingComponent = () =>{
    return (
        <h1>Hello from HeadingComponent</h1>
    )
}
const HeadingComponent2 = () => <h2>Hello from HeadingComponent2</h2>

// Component Composition
const HeadingComponent3 = () =>(
    <div>
        <Title />
        {<HeadingComponent />} // 1st way to use component inside component
        <HeadingComponent></HeadingComponent> // 2nd way to use component inside component
        <HeadingComponent /> // 3rd way to use component inside component
        <HeadingComponent2 />
        <h1>Hello from HeadingComponent3</h1>
    </div>
)

// js insidee jsx or component
const number = 100;
const HeadingComponent4 = () =>(
    <div>
        {number}
        <h1>Hello from HeadingComponent4</h1>
        <h2>The number is {number}</h2>
        <h3>The sum is {10+20}</h3>
        {console.log("Inside jsx")}
    </div>
)

// React Element inside  Component or jsx
const elem = <span> React Element </span>
const HeadingComponent5 = () => (
 <div id="containter">
    <h2>{elem}</h2>
   <h1>This is Namaste React</h1>
 </div>
)

// React Element inside React Element

const elem2 = (<h1>React Element inside React Element {elem}</h1>)

// React Component inside React Element

const elem3 = (
    <div>
        <h1>React Component inside React Element</h1>
        <HeadingComponent4 />
    </div>
)

// infinite loop in react : deadlock -> component inside element and element inside conmponent
//1
const HeadingComponent6 = () =>(
    <div>
        {title1}
        <h1>
            Hello from HeadingComponent6
        </h1>
    </div>
)

const title1 = (
<div>
    <h1>Title1</h1>
    <HeadingComponent6 />

</div>
);
//2
const C1 =() =>(
    <div>
    <h1>
        Hello from c1
    </h1>
    <C2 />
    </div>
)

const C2 =() =>(
    <div>
    <h1>
        Hello from c2
    </h1>
    <C1 />
    </div>
)

// Cross site Scripting attack (XSS attack) prevention
// JSX have ability tto handle all the attack 

root.render(<C1 />);