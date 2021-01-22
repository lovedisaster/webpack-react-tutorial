import React from 'react';
import Listing from '../Listing';
import renderer from 'react-test-render';

it("listing page snapshot" , () => {
    const listingPage = renderer.create(<Listing></Listing>).toJSON();
    expect(listingPage).toMatchSnapshot();
});