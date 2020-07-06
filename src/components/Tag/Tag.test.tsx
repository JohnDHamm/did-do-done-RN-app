import React from 'react';
import { cleanup } from 'react-native-testing-library';
import Tag from './Tag';
import { renderWithLightTheme } from '../../testing/helpers';

describe('Tag', () => {
  afterEach(cleanup);

  it('renders correctly as a selected tag', () => {
    const testRenderer = renderWithLightTheme(
      <Tag label="test" color="navy" selected={true} />
    ).toJSON();

    expect(testRenderer).toMatchSnapshot();
  });

  it('renders correctly as an unselected tag', () => {
    const testRenderer = renderWithLightTheme(
      <Tag label="test" color="navy" selected={false} />
    ).toJSON();

    expect(testRenderer).toMatchSnapshot();
  });

  it('renders the label prop', () => {
    const { getByText } = renderWithLightTheme(
      <Tag label="Tag 1" color="red" selected={false} />
    );

    expect(getByText('Tag 1')).not.toBeNull();
  });
});
