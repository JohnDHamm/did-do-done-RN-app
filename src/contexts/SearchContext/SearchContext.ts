import React from 'react';

declare global {
  interface SearchContextInterface {
    selectedTagIds: number[];
    setCurrentSelectedTagIds: (selectedTagIds: number[]) => void;
  }
}

export const SEARCHTERMS_DEFAULT_VALUE: SearchContextInterface = {
  selectedTagIds: [],
  setCurrentSelectedTagIds: () => [],
};

export const SearchContext = React.createContext<SearchContextInterface>(
  SEARCHTERMS_DEFAULT_VALUE
);
