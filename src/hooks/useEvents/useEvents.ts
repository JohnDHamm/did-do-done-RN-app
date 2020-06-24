import React from 'react';
import { mockSavedEvents } from '../../mocks/mockSavedEvents'; //TODO: remove

export const useEvents = (): EventsContextInterface => {
  const [events, setEvents] = React.useState<SavedEvent[]>(mockSavedEvents);

  const setCurrentEvents = React.useCallback(
    (currentEvents: SavedEvent[]): void => {
      setEvents(currentEvents);
    },
    []
  );

  return { events, setCurrentEvents };
};
