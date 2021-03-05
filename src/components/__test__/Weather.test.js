import React from 'react';
import ReactDom from 'react-dom';
import Weather from '../Pages/Weather';

it("renders without Crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<Weather></Weather>, div);
    ReactDom.unmountComponentAtNode(div);
})