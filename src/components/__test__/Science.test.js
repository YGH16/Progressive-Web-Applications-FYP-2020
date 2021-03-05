import React from 'react';
import ReactDom from 'react-dom';
import Science from '../Pages/Science';

it("renders without Crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<Science></Science>, div);
    ReactDom.unmountComponentAtNode(div);
})