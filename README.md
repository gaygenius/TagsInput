# A React TagsInput Component

I wrote this React tags input component from scratch.

<img width="638" alt="TagsInput component to select U.S. state names" src="https://user-images.githubusercontent.com/890659/92015593-e329ac80-ed05-11ea-9a4e-6a47cfcc55a9.png">

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
      <TagsInput
        autocompleteEntries={states}
        placeholder="start typing the name of a state"
      />
      <blockquote>
        <i>Select a U.S. state by typing some letter in the state’s name.</i>
      </blockquote>
    </div>
  );
}
```

- After starting to type, the user can use Down and Up arrow keys to navigate.
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
