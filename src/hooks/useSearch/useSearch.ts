import React from 'react';

export const useSearch = (): SearchContextInterface => {
  const [selectedTagIds, setSelectedTagIds] = React.useState<number[]>([]);

  const setCurrentSelectedTagIds = React.useCallback(
    (currentSelectedTagIds: number[]): void => {
      setSelectedTagIds(currentSelectedTagIds);
    },
    []
  );

  return { selectedTagIds, setCurrentSelectedTagIds };
};
