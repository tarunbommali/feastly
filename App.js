import React from 'react'
import ReactDOM from 'react-dom/client'

const AppHeading= () => <h1>Hello React!</h1>

// >>>>> Nested Element using React syntax

const NestedEl = React.createElement(
                "div",{ id: "nestedContainer" },
                        React.createElement("h3",{ id: "reactHeading" },
                                 <AppHeading/>)
                );


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(NestedEl);
