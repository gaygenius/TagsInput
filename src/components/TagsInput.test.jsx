import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TagsInput from './TagsInput';

const keys = {
  ArrowDown: { key: 'ArrowDown', keyCode: 40 },
  Enter: { key: 'Enter', keyCode: 13 },
  BackSpace: { key: 'BackSpace', keyCode: 8 },
};

const setup = props => {
  const placeholder = 'start typing here';
  const utils = render(<TagsInput placeholder={placeholder} {...props} />);
  const inputField = utils.getByPlaceholderText(placeholder);
  return { inputField, ...utils };
};

test('user can add a custom tag', () => {
  const { inputField, queryByText } = setup({});
  const customTag = 'my tag';
  const expectedTag = `x ${customTag}`;
  expect(queryByText(expectedTag)).toBeNull();
  fireEvent.change(inputField, { target: { value: customTag } });
  expect(queryByText(expectedTag)).toBeNull();
  fireEvent.keyDown(inputField, keys.Enter);
  expect(queryByText(expectedTag)).toBeTruthy();
});

test('user can add an autocomplete tag', () => {
  const autocompleteEntries = ['fast', 'faster', 'fastest'].map(name => ({
    name,
  }));
  const { inputField, queryByText } = setup({ autocompleteEntries });
  const expectedTag = 'x faster';
  expect(queryByText(expectedTag)).toBeNull();
  fireEvent.change(inputField, { target: { value: 'fast' } });
  expect(queryByText(expectedTag)).toBeNull();
  fireEvent.keyDown(inputField, keys.ArrowDown);
  fireEvent.keyDown(inputField, keys.ArrowDown);
  fireEvent.keyDown(inputField, keys.Enter);
  expect(queryByText(expectedTag)).toBeTruthy();
});

test('user can delete last tag using keyboard', () => {
  const { inputField, queryByText } = setup({});
  const firstTag = 'first';
  const expectedFirstTag = `x ${firstTag}`;
  const tagToBeDeleted = 'last';
  const expectedTagToBeDeleted = `x ${tagToBeDeleted}`;
  expect(queryByText(expectedFirstTag)).toBeNull();
  expect(queryByText(expectedTagToBeDeleted)).toBeNull();
  // enter two tags and confirm their presence
  fireEvent.change(inputField, { target: { value: firstTag } });
  fireEvent.keyDown(inputField, keys.Enter);
  fireEvent.change(inputField, { target: { value: tagToBeDeleted } });
  fireEvent.keyDown(inputField, keys.Enter);
  expect(queryByText(expectedFirstTag)).toBeTruthy();
  expect(queryByText(expectedTagToBeDeleted)).toBeTruthy();
  // hit Delete and confirm last tag was deleted
  fireEvent.keyDown(inputField, keys.BackSpace);
  expect(queryByText(expectedFirstTag)).toBeTruthy();
  expect(queryByText(expectedTagToBeDeleted)).toBeNull();
});
