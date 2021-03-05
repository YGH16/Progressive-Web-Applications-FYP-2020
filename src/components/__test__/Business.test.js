import React from 'react';
import ReactDom from 'react-dom';
import Business from '../Pages/Business';

it("renders without Crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<Business></Business>, div);
    ReactDom.unmountComponentAtNode(div);
})