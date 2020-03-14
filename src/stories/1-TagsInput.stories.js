import React from 'react';
import TagsInput from '../components/TagsInput';
import cocktails from './cocktails.json';

export default {
  title: 'TagsInput',
  component: TagsInput,
};

export const Cocktails = () => <TagsInput autocompleteEntries={cocktails} />;
