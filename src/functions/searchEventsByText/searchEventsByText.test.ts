import searchEventsByText from './searchEventsByText';

const mockEvents: SavedEvent[] = [
  {
    id: 0,
    name: 'oil change',
    date: 11111111111,
  },
  {
    id: 1,
    name: 'Changed filter',
    date: 11111111111,
  },
  {
    id: 2,
    name: 'something else',
    date: 11111111111,
  },
  // duplicate event (can happen from tag search)
  {
    id: 1,
    name: 'Changed filter',
    date: 11111111111,
  },
];

describe('searchEventsByText()', () => {
  it('returns events filtered by search text', () => {
    expect(searchEventsByText(mockEvents, 'Oil')).toEqual([mockEvents[0]]);
    expect(searchEventsByText(mockEvents, 'change')).toEqual([
      mockEvents[0],
      mockEvents[1],
    ]);
  });
});
