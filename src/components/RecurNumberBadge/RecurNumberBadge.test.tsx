import React from 'react';
import { cleanup } from 'react-native-testing-library';
import RecurNumberBadge from './RecurNumberBadge';
import { renderWithLightTheme } from '../../testing/helpers';

describe('RecurNumberBadge', () => {
  afterEach(cleanup);

  it('renders correctly with "missed" type', () => {
    const testRenderer = renderWithLightTheme(
      <RecurNumberBadge total={42} type="missed" />
    ).toJSON();

    expect(testRenderer).toMatchSnapshot();
  });

  it('renders correctly with "today" type', () => {
    const testRenderer = renderWithLightTheme(
      <RecurNumberBadge total={43} type="today" />
    ).toJSON();

    expect(testRenderer).toMatchSnapshot();
  });

  it('renders correctly with "thisweek" type', () => {
    const testRenderer = renderWithLightTheme(
      <RecurNumberBadge total={44} type="thisweek" />
    ).toJSON();

    expect(testRenderer).toMatchSnapshot();
  });

  it('renders correctly with "next30" type', () => {
    const testRenderer = renderWithLightTheme(
      <RecurNumberBadge total={45} type="next30" />
    ).toJSON();

    expect(testRenderer).toMatchSnapshot();
  });
});
