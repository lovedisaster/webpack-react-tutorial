import React from 'react';
import Home from '../Home';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


it("renders home page" , () => {
    render(<Home/>);
    fireEvent.change(screen.getByTestId("text-field"), {target: {value: 123}});
    fireEvent.click(screen.getByTestId("submit"));
    expect(screen.getByTestId('currentValue')).toHaveTextContent("123");
});
