import React from 'react';

export const useSearch = (): SearchContextInterface => {
  const [searchTerms, setSearchTerms] = React.useState<SearchTerms>({
    selectedTagIds: [],
    searchText: '',
  });

  const setCurrentSearchTerms = React.useCallback(
    (currentSearchTerms: SearchTerms): void => {
      setSearchTerms(currentSearchTerms);
    },
    []
  );

  return { searchTerms, setCurrentSearchTerms };
};
