import React from "react";
import Home from './Home';
import renderer from 'react-test-renderer';

it('matches the snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
});