import React from 'react';
import { cleanup, render } from 'react-native-testing-library';
import Button from './Button';

describe('Button', () => {
  afterEach(cleanup);

  it('renders correctly with defaults', () => {
    const testRenderer = render(<Button label="regular" />).toJSON();

    expect(testRenderer).toMatchSnapshot();
  });

  it('renders correctly as an "alt" type', () => {
    const testRenderer = render(<Button label="alt" type="alt" />).toJSON();

    expect(testRenderer).toMatchSnapshot();
  });

  it('renders correctly as an "delete" type', () => {
    const testRenderer = render(
      <Button label="delete" type="delete" />
    ).toJSON();

    expect(testRenderer).toMatchSnapshot();
  });

  it('renders the label prop', () => {
    const { getByText } = render(<Button label="Button 1" />);

    expect(getByText('Button 1')).not.toBeNull();
  });
});
