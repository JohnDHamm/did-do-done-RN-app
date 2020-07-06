import React from 'react';
import { cleanup, render } from 'react-native-testing-library';
import SectionHeader from './SectionHeader';

describe('SectionHeader', () => {
  afterEach(cleanup);

  it('renders correctly with defaults', () => {
    const { toJSON } = render(<SectionHeader text="testing" />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders the text prop correctly', () => {
    const { getByText } = render(<SectionHeader text="Test heading" />);

    expect(getByText('Test heading')).not.toBeNull;
  });
});
