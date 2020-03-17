import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TagsInput from './TagsInput';

const keys = {
  ArrowDown: { key: 'ArrowDown', keyCode: 40 },
  Enter: { key: 'Enter', keyCode: 13 },
};

const setup = props => {
  const utils = render(<TagsInput {...props} />);
  const input = utils.getByPlaceholderText('type a tag and press enter');
  return { input, ...utils };
};

test('user can add a custom tag', () => {
  const { input, queryByText } = setup({});
  const customTag = 'my tag';
  const expectedTag = `x ${customTag}`;
  expect(queryByText(expectedTag)).toBeNull();
  fireEvent.change(input, { target: { value: customTag } });
  expect(queryByText(expectedTag)).toBeNull();
  fireEvent.keyDown(input, keys.Enter);
  expect(queryByText(expectedTag)).toBeTruthy();
});

test('user can add an autocomplete tag', () => {
  const autocompleteEntries = ['fast', 'faster', 'fastest'].map(name => ({
    name,
  }));
  const { input, queryByText } = setup({ autocompleteEntries });
  const expectedTag = 'x faster';
  expect(queryByText(expectedTag)).toBeNull();
  fireEvent.change(input, { target: { value: 'fast' } });
  expect(queryByText(expectedTag)).toBeNull();
  fireEvent.keyDown(input, keys.ArrowDown);
  fireEvent.keyDown(input, keys.ArrowDown);
  fireEvent.keyDown(input, keys.Enter);
  expect(queryByText(expectedTag)).toBeTruthy();
});
