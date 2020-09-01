# A React TagsInput Component

I wrote this React tags input component from scratch.

## Description

This React component supports selecting tags from a list of entries provided or adding custom tags created on the fly.

- The **autocompleteEntries** prop is an array of entries with **name** fields. For example:

```javascript
function App() {
  const states = [
    {
      name: 'Alabama',
      abbreviation: 'AL',
    },
    {
      name: 'Alaska',
      abbreviation: 'AK',
    },
  ];
  return (
    <div className="App">
      <h1>TagsInput component</h1>
      <TagsInput autocompleteEntries={states} />
      <blockquote>
        <i>Select names of U.S. states or add arbitrary tags</i>
      </blockquote>
    </div>
  );
}
```

- After starting to type, the user can use arrow keys to navigate.
- The user can create custom tags by typing Enter instead of selecting from dropdown.
- The user can remove a tag by clicking on the tag. The user can also type Delete to delete the last tag.
- If the dropdown is showing, the user can click outside the TagsInput component to close the dropdown. Clicking on the TagsInput field will re-open the dropdown.
- Storybook is supported.

## Running the server

```
yarn
yarn start
```

## Running the tests

```
yarn test
```

## Running Storybook

```
yarn storybook
```
