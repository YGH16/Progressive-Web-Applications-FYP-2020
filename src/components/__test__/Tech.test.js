import React from 'react';
import ReactDom from 'react-dom';
import Tech from '../Pages/Tech';

it("renders without Crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<Tech></Tech>, div);
    ReactDom.unmountComponentAtNode(div);
})