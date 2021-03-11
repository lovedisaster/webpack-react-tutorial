import React from 'react';
import Listing from '../Listing';
import TestRenderer from 'react-test-renderer';

it("listing page snapshot" , () => {
    const listingPage = TestRenderer.create(<Listing></Listing>).toJSON();
    expect(listingPage).toMatchSnapshot();
});