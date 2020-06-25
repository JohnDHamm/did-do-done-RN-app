import uniqby from 'lodash.uniqby';

const searchEventsByText = (
  events: SavedEvent[],
  searchText: string
): SavedEvent[] => {
  const searchTerms: Array<string> = searchText.split(' ');
  const results: SavedEvent[] = [];
  events.forEach((event) => {
    searchTerms.forEach((term) => {
      if (event.name.toLowerCase().includes(term.toLowerCase())) {
        results.push(event);
      }
    });
  });
  return uniqby(results, 'id');
};

export default searchEventsByText;
