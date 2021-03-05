import React from 'react';
import ReactDom from 'react-dom';
import Features from '../Pages/Features';

it("renders without Crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<Features></Features>, div);
    ReactDom.unmountComponentAtNode(div);
})