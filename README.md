# A React TagsInput Component

I wrote this React tags input component from scratch. The first working version took less than an hour and did not support keyboard navigation. It still needs more tests and some refactoring to enhance readability and maintainability.

<img width="200" alt="TagsInput component to select U.S. state names" src="https://user-images.githubusercontent.com/890659/92015593-e329ac80-ed05-11ea-9a4e-6a47cfcc55a9.png">

## Description

This React component supports selecting tags from a list of entries provided or adding custom tags created on the fly.

- After starting to type, the user can use `Down` and `Up` arrow keys to navigate.
- The user can create custom tags by typing `Enter` instead of selecting from dropdown.
- The user can remove a tag by clicking on the tag.
- The user can type `Delete` to delete the last tag when the input field is empty.
- If the dropdown is showing, the user can click outside the component to close the dropdown. Clicking on the input field will re-open the dropdown.
- [Storybook](https://storybook.js.org/) is supported.

## Usage

### Props

- **autocompleteEntries** — an array of entries with **name** fields
- **placeholder** — optional placeholder text for input field

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

### Running the server

```
yarn
yarn start
```

### Running the tests

```
yarn test
```

### Running Storybook

```
yarn storybook
```

## Future development ideas

- A prop to indicate to only show autocomplete suggestions that start with the typed input.
- Show fuzzy matches in autocomplete.
