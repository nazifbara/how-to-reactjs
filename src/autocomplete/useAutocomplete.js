import { useState } from 'react';

const INITIAL_STATE = {
  value: '',
  suggestions: [],
  currentFocus: null,
};

const defaultFilter = (inputValue, items) =>
  items
    .filter((item) => {
      const match = item.substr(0, inputValue.length);
      return match && match.toLowerCase() === inputValue.toLowerCase();
    })
    .map((item) => ({
      rest: item.substr(inputValue.length),
      itemValue: item,
    }))
    .slice(0, 13);

const useAutocomplete = () => {
  const [{ value, suggestions, currentFocus }, setState] =
    useState(INITIAL_STATE);

  const handleValueChange = (newValue, items, { customFilter } = {}) => {
    const filter = customFilter ?? defaultFilter;

    setState((s) => ({
      ...s,
      currentFocus: -1,
      value: newValue,
      suggestions: filter(newValue, items),
    }));
  };

  const select = (value) => setState({ ...INITIAL_STATE, value });

  const handleKeyDown = ({ key }) => {
    switch (key) {
      case 'ArrowDown':
        setState((s) => ({
          ...s,
          currentFocus:
            s.currentFocus === s.suggestions.length - 1
              ? 0
              : s.currentFocus + 1,
        }));
        break;
      case 'ArrowUp':
        setState((s) => ({
          ...s,
          currentFocus:
            s.currentFocus === 0 || s.currentFocus === -1
              ? s.suggestions.length - 1
              : s.currentFocus - 1,
        }));
        break;
      case 'Enter':
        if (currentFocus !== null && currentFocus !== -1) {
          select(suggestions[currentFocus].itemValue);
        }
        break;
      default:
        break;
    }
  };

  return {
    value,
    handleValueChange,
    suggestions,
    select,
    handleKeyDown,
    currentFocus,
  };
};

export default useAutocomplete;
