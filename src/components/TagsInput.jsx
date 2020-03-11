import React, { useState, createRef, useEffect } from 'react';
import colors from '../colors.json';

const KEYCODE_BACK_SPACE = 8;
const KEYCODE_ENTER = 13;
const KEYCODE_ESCAPE = 27;
const KEYCODE_UP_ARROW = 38;
const KEYCODE_DOWN_ARROW = 40;

const stringCaseInsensitiveContains = (string, substringToFind) =>
  string.toUpperCase().indexOf(substringToFind.toUpperCase()) !== -1;
const stringsCaseInsensitiveEqual = (a, b) =>
  a.toUpperCase() === b.toUpperCase();
const stringCaseInsensitivePresent = (strings, stringToFind) =>
  strings.find(string => stringsCaseInsensitiveEqual(string, stringToFind));

export default function TagsInput() {
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);
  const [tagSuggestions, setTagSuggestions] = useState([]);
  const [tagSuggestionIndex, setTagSuggestionIndex] = useState(null);
  const tagInputRef = createRef();
  const clearTagInputAndSuggestions = () => {
    setTagInput('');
    setTagSuggestions([]);
  };
  const focusInput = () => tagInputRef.current.focus();
  const addTag = tagToAdd => {
    if (!stringCaseInsensitivePresent(tags, tagToAdd)) {
      setTags(() => [...tags, tagToAdd]);
    }
  };
  const removeTag = tagToRemove => {
    setTags(() => tags.filter(tag => tag !== tagToRemove));
    focusInput();
  };
  const handleRemoveTag = tagToRemove => {
    removeTag(tagToRemove);
    clearTagInputAndSuggestions();
  };
  const handleKeyDown = e => {
    if (e.keyCode === KEYCODE_ENTER) {
      clearTagInputAndSuggestions();
      if (tagInput.length > 0) {
        const tagToAdd =
          tagSuggestionIndex === null
            ? tagInput
            : tagSuggestions[tagSuggestionIndex];
        addTag(tagToAdd);
      }
      return;
    }
    if (e.keyCode === KEYCODE_BACK_SPACE) {
      if (tagInput.length === 0 && tags.length > 0) {
        removeTag(tags[tags.length - 1]);
      }
      return;
    }
    if (e.keyCode === KEYCODE_ESCAPE) {
      clearTagInputAndSuggestions();
      return;
    }
    const isUpArrow = e.keyCode === KEYCODE_UP_ARROW;
    const isDownArrow = e.keyCode === KEYCODE_DOWN_ARROW;
    if (!isUpArrow && !isDownArrow) {
      return;
    }
    if (tagSuggestionIndex === null) {
      setTagSuggestionIndex(0);
      return;
    }
    if (isUpArrow) {
      setTagSuggestionIndex(Math.max(tagSuggestionIndex - 1, 0));
    } else {
      setTagSuggestionIndex(
        Math.min(tagSuggestionIndex + 1, tagSuggestions.length - 1)
      );
    }
  };
  const handleTagInputChange = e => {
    const typedTag = e.target.value;
    setTagInput(typedTag);
    setTagSuggestionIndex(null);
    const matchingColors = colors
      .filter(
        ({ name }) =>
          stringCaseInsensitiveContains(name, typedTag) &&
          !stringCaseInsensitivePresent(tags, name)
      )
      .map(color => color.name);
    setTagSuggestions(matchingColors);
  };
  const handleSuggestionClick = tagSuggestion => {
    clearTagInputAndSuggestions();
    addTag(tagSuggestion);
  };
  useEffect(focusInput, []);
  return (
    <>
      <div className="tags-input">
        {tags.map(tag => (
          <div
            className="tags-tag"
            key={tag}
            onClick={() => handleRemoveTag(tag)}
          >
            x {tag}
          </div>
        ))}
        <input
          type="text"
          value={tagInput}
          onChange={handleTagInputChange}
          onKeyDown={handleKeyDown}
          className="tags-tag-input"
          ref={tagInputRef}
        ></input>
      </div>
      <div className="tags-autocomplete">
        {tagSuggestions.map((tagSuggestion, index) => (
          <div
            key={tagSuggestion}
            className={index === tagSuggestionIndex ? 'selected' : ''}
            onClick={() => handleSuggestionClick(tagSuggestion)}
          >
            {tagSuggestion}
          </div>
        ))}
      </div>
    </>
  );
}
