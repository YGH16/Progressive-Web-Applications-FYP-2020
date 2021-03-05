import React from 'react';
import ReactDom from 'react-dom';
import Aboutus from '../Pages/Aboutus';

it("renders without Crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<Aboutus></Aboutus>, div);
    ReactDom.unmountComponentAtNode(div);
})