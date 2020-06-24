import React from 'react';
import { mockSavedTags } from '../../mocks/mockSavedTags'; //TODO: remove

export const useTags = (): TagsContextInterface => {
  const [tags, setTags] = React.useState<Tag[]>(mockSavedTags);

  const setCurrentTags = React.useCallback((currentTags: Tag[]): void => {
    setTags(currentTags);
  }, []);

  return { tags, setCurrentTags };
};
