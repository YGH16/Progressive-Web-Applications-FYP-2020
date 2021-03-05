import React from 'react';
import ReactDom from 'react-dom';
import Politics from '../Pages/Politics';

it("renders without Crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<Politics></Politics>, div);
    ReactDom.unmountComponentAtNode(div);
})