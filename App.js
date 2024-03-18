import React from 'react'
import ReactDOM from 'react-dom/client'

const AppHeading= () => <h1>Hello React!</h1>

// >>>>> Nested Element using React syntax

const NestedHeader = React.createElement(
                "div",{ id: "nestedContainer" },
                        React.createElement("h3",{ id: "reactHeading" },
                                 "Hello React!")
                );

const JSXNestedHeader = <div><h3>Hello React!</h3></div>


// Title component is functional component 
const Title = () => {
    return (
        <h1 id='title'>This is Functional Component</h1>
    )
}

// Composition of Component 
const HeaderComponent = function() {
    return (
        <div>
            <Title />
            <p>This is the composition element!</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);
