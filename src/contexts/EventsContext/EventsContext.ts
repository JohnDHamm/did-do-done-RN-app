import React from 'react';

declare global {
  interface EventsContextInterface {
    events: SavedEvent[];
    setCurrentEvents: (events: SavedEvent[]) => void;
  }
}

export const EVENTS_DEFAULT_VALUE: EventsContextInterface = {
  events: [],
  setCurrentEvents: () => [],
};

export const EventsContext = React.createContext<EventsContextInterface>(
  EVENTS_DEFAULT_VALUE
);
