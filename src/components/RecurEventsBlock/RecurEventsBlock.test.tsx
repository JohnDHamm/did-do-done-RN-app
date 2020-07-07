import React from 'react';
import { cleanup } from 'react-native-testing-library';
import RecurEventsBlock from './RecurEventsBlock';
import { renderWithLightTheme } from '../../testing/helpers';

const recurTotals: RecurTotals = {
  missed: 1,
  today: 2,
  thisweek: 4,
  next30: 3,
};

describe('RecurEventsBlock', () => {
  afterEach(cleanup);

  it('renders correctly with defaults', () => {
    const testRenderer = renderWithLightTheme(
      <RecurEventsBlock recurTotals={recurTotals} />
    ).toJSON();

    expect(testRenderer).toMatchSnapshot();
  });

  it('renders correctly with minimized prop set to true', () => {
    const testRenderer = renderWithLightTheme(
      <RecurEventsBlock recurTotals={recurTotals} minimized />
    ).toJSON();

    expect(testRenderer).toMatchSnapshot();
  });
});
