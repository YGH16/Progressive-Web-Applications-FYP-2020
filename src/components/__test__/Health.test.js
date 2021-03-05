import React from 'react';
import ReactDom from 'react-dom';
import Health from '../Pages/Health';

it("renders without Crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<Health></Health>, div);
    ReactDom.unmountComponentAtNode(div);
})