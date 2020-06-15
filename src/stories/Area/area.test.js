import React from 'react';
import Area from './Area-Chart';
import renderer from 'react-test-renderer';

window.URL.createObjectURL = function() {};
it('renders correctly', () => {
  const tree = renderer
    .create(<Area />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

