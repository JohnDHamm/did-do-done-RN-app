import React from 'react';

declare global {
  interface SearchTerms {
    selectedTagIds: number[];
    searchText: string;
  }
  interface SearchContextInterface {
    searchTerms: SearchTerms;
    setCurrentSearchTerms: (searchTerms: SearchTerms) => void;
  }
}

export const SEARCHTERMS_DEFAULT_VALUE: SearchContextInterface = {
  searchTerms: {
    selectedTagIds: [],
    searchText: '',
  },
  setCurrentSearchTerms: () => [],
};

export const SearchContext = React.createContext<SearchContextInterface>(
  SEARCHTERMS_DEFAULT_VALUE
);
