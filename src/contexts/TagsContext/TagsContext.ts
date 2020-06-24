import React from 'react';

declare global {
  interface TagsContextInterface {
    tags: Tag[];
    setCurrentTags: (tags: Tag[]) => void;
  }
}

export const TAGS_DEFAULT_VALUE: TagsContextInterface = {
  tags: [],
  setCurrentTags: () => [],
};

export const TagsContext = React.createContext<TagsContextInterface>(
  TAGS_DEFAULT_VALUE
);
