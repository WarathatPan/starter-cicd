import React from 'react';
import About from './About';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should match the snapshot', () => {
    const component = renderer.create(<About />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render without crashing', () => {
    shallow(<About />);
});