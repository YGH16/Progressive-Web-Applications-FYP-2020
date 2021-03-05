import React from 'react';
import ReactDom from 'react-dom';
import { render, screen } from '@testing-library/react'
import Caro from '../Caro';




it("renders without Crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<Caro></Caro>, div);
    ReactDom.unmountComponentAtNode(div);
})