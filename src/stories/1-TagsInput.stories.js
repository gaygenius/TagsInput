import React from 'react';
import TagsInput from '../components/TagsInput';
import cocktails from './cocktails.json';

export default {
  title: 'TagsInput',
  component: TagsInput,
};

export const Cocktails = () => (
  <div>
    <h1>Cocktails</h1>
    <TagsInput
      autocompleteEntries={cocktails}
      placeholder="start typing a cocktail name"
    />
    <blockquote>
      <i>Start typing names of cocktails and select from dropdown.</i>
    </blockquote>
  </div>
);
