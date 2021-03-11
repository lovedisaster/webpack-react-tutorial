import React from 'react';
import Home from '../Home';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe("Test home page", () => {

    beforeAll(() => {
        render(<Home/>);
    })

    test("Input value and submit should show current value in title" , () => {
        fireEvent.change(screen.getByTestId("text-field"), {target: {value: 123}});
        fireEvent.click(screen.getByTestId("submit"));
        expect(screen.getByTestId('currentValue')).toHaveTextContent("123");
    });

    // test("When page load the list should be loaded", () => {
    //     expect(screen.getByTestId("Danny")).toHaveTextContent("Danny");
    // });
});
