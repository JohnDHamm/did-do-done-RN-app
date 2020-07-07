import React from 'react';
import { cleanup, render } from 'react-native-testing-library';
import Logo from './Logo';

describe('Logo', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { toJSON } = render(<Logo color="purple" width={100} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
