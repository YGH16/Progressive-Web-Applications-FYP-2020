import React from 'react';
import ReactDom from 'react-dom';
import Newsbox from '../Newsbox';

it("renders without Crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<Newsbox></Newsbox>, div);
    ReactDom.unmountComponentAtNode(div);
})