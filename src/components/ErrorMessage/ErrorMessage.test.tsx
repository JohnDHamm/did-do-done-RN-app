import React from 'react';
import { cleanup, render } from 'react-native-testing-library';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { toJSON } = render(<ErrorMessage>error message</ErrorMessage>);

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders the text correctly', () => {
    const { getByText } = render(<ErrorMessage>error message</ErrorMessage>);

    expect(getByText('error message')).not.toBeNull;
  });
});
