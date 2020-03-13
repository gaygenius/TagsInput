import React, { useState, createRef, useEffect } from 'react';
import colors from '../colors.json';
import {
  stringCaseInsensitiveContains,
  stringCaseInsensitivePresent,
} from '../utils';

const keyCodes = {
  KEYCODE_BACK_SPACE: 8,
  KEYCODE_ENTER: 13,
  KEYCODE_ESCAPE: 27,
  KEYCODE_UP_ARROW: 38,
  KEYCODE_DOWN_ARROW: 40,
};

export default function TagsInput() {
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);
  const [tagSuggestions, setTagSuggestions] = useState([]);
  const [tagSuggestionIndex, setTagSuggestionIndex] = useState(null);
  const tagInputRef = createRef();
  const clearTagSuggestions = () => {
    setTagSuggestions([]);
    setTagSuggestionIndex(null);
  };
  const clearTagInputAndSuggestions = () => {
    setTagInput('');
    clearTagSuggestions();
  };
  const focusInput = () => {
    tagInputRef.current.focus();
  };
  const addTag = tagToAdd => {
    if (!stringCaseInsensitivePresent(tags, tagToAdd)) {
      setTags(() => [...tags, tagToAdd]);
    }
  };
  const removeTag = tagToRemove => {
    setTags(() => tags.filter(tag => tag !== tagToRemove));
  };
  const autocomplete = typedInput => {
    clearTagSuggestions();
    if (typedInput.length === 0) {
      return;
    }
    const matchingColors = colors
      .filter(
        ({ name }) =>
          stringCaseInsensitiveContains(name, typedInput) &&
          !stringCaseInsensitivePresent(tags, name)
      )
      .map(color => ({
        tagName: color.name,
        ref: createRef(),
      }));
    setTagSuggestions(matchingColors);
  };
  const handleRemoveTag = tagToRemove => {
    removeTag(tagToRemove);
    clearTagInputAndSuggestions();
  };
  const handleKeyDown = e => {
    if (e.keyCode === keyCodes.KEYCODE_ENTER) {
      clearTagInputAndSuggestions();
      if (tagInput.length > 0) {
        const tagToAdd =
          tagSuggestionIndex === null
            ? tagInput
            : tagSuggestions[tagSuggestionIndex].tagName;
        addTag(tagToAdd);
      }
      return;
    }
    if (e.keyCode === keyCodes.KEYCODE_BACK_SPACE) {
      if (tagInput.length === 0 && tags.length > 0) {
        removeTag(tags[tags.length - 1]);
      }
      return;
    }
    if (e.keyCode === keyCodes.KEYCODE_ESCAPE) {
      clearTagInputAndSuggestions();
      return;
    }
    if (tagSuggestions.length === 0) {
      return;
    }
    const isUpArrow = e.keyCode === keyCodes.KEYCODE_UP_ARROW;
    const isDownArrow = e.keyCode === keyCodes.KEYCODE_DOWN_ARROW;
    if (!isUpArrow && !isDownArrow) {
      return;
    }
    if (tagSuggestionIndex === null) {
      setTagSuggestionIndex(0);
      return;
    }
    const newTagSuggestionIndex = isUpArrow
      ? Math.max(tagSuggestionIndex - 1, 0)
      : Math.min(tagSuggestionIndex + 1, tagSuggestions.length - 1);
    setTagSuggestionIndex(newTagSuggestionIndex);
    tagSuggestions[newTagSuggestionIndex].ref.current.scrollIntoView({
      block: 'nearest',
    });
  };
  const handleTagInputChange = e => {
    const typedInput = e.target.value;
    setTagInput(typedInput);
    autocomplete(typedInput);
  };
  const handleSuggestionClick = tagSuggestion => {
    clearTagInputAndSuggestions();
    addTag(tagSuggestion);
  };
  const handleContainerClick = () => {
    focusInput();
  };
  useEffect(focusInput, []);
  return (
    <div className="tags-input-container" onClick={handleContainerClick}>
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
      {tagSuggestions.length > 0 && (
        <div className="tags-autocomplete">
          {tagSuggestions.map(({ tagName, ref }, index) => (
            <div
              key={tagName}
              ref={ref}
              className={index === tagSuggestionIndex ? 'selected' : ''}
              onClick={() => handleSuggestionClick(tagName)}
            >
              {tagName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
