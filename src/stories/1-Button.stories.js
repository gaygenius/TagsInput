import React from 'react';
import TagsInput from '../components/TagsInput';

export default {
  title: 'TagsInput',
  component: TagsInput,
};

const autocompleteEntries = [{ name: 'hello' }, { name: 'world' }];

export const Text = () => (
  <TagsInput autocompleteEntries={autocompleteEntries} />
);
