export const stringCaseInsensitiveContains = (string, substringToFind) =>
  string.toUpperCase().indexOf(substringToFind.toUpperCase()) !== -1;
export const stringsCaseInsensitiveEqual = (a, b) =>
  a.toUpperCase() === b.toUpperCase();
export const stringCaseInsensitivePresent = (strings, stringToFind) =>
  strings.find(string => stringsCaseInsensitiveEqual(string, stringToFind));
