import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './src/components/Body';
import Header from './src/components/Header';
import Footer  from './src/components/Footer';

const AppLayout = () => (
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
