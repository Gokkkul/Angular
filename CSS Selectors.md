CSS selectors are used to select and style the HTML elements on a web page. Here is a comprehensive list of CSS selectors:

### Basic Selectors
- **Universal Selector**: `*` - Selects all elements.
  ```css
  * {
    margin: 0;
  }
  ```

- **Type Selector**: `element` - Selects all elements of the specified type.
  ```css
  p {
    color: blue;
  }
  ```

### Class and ID Selectors
- **Class Selector**: `.class` - Selects all elements with the specified class.
  ```css
  .example {
    font-size: 14px;
  }
  ```

- **ID Selector**: `#id` - Selects the element with the specified ID.
  ```css
  #unique {
    background-color: yellow;
  }
  ```

### Attribute Selectors
- **[attribute]**: Selects elements with the specified attribute.
  ```css
  [type="text"] {
    border: 1px solid black;
  }
  ```

- **[attribute^="value"]**: Selects elements with the specified attribute starting with a value.
  ```css
  [class^="btn-"] {
    padding: 10px;
  }
  ```

- **[attribute$="value"]**: Selects elements with the specified attribute ending with a value.
  ```css
  [href$=".pdf"] {
    color: red;
  }
  ```

- **[attribute*="value"]**: Selects elements with the specified attribute containing a value.
  ```css
  [title*="example"] {
    font-weight: bold;
  }
  ```

### Pseudo-class Selectors
- **:hover**: Selects elements when they are being hovered over.
  ```css
  a:hover {
    color: green;
  }
  ```

- **:focus**: Selects elements when they are focused.
  ```css
  input:focus {
    outline: none;
  }
  ```

- **:nth-child(n)**: Selects the nth child of a parent element.
  ```css
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  ```

- **:first-child**: Selects the first child of a parent element.
  ```css
  p:first-child {
    font-style: italic;
  }
  ```

- **:last-child**: Selects the last child of a parent element.
  ```css
  p:last-child {
    font-weight: bold;
  }
  ```

- **:not(selector)**: Selects all elements that do not match the selector.
  ```css
  p:not(.highlight) {
    color: gray;
  }
  ```

### Pseudo-element Selectors
- **::before**: Inserts content before the element.
  ```css
  p::before {
    content: "Note: ";
    font-weight: bold;
  }
  ```

- **::after**: Inserts content after the element.
  ```css
  p::after {
    content: " *";
    color: red;
  }
  ```

- **::first-line**: Styles the first line of the element.
  ```css
  p::first-line {
    text-transform: uppercase;
  }
  ```

- **::first-letter**: Styles the first letter of the element.
  ```css
  p::first-letter {
    font-size: 2em;
    color: blue;
  }
  ```

### Combinator Selectors
- **Descendant Selector**: `ancestor descendant` - Selects all elements that are descendants of a specified ancestor.
  ```css
  div p {
    margin: 20px;
  }
  ```

- **Child Selector**: `parent > child` - Selects all elements that are direct children of a specified parent.
  ```css
  ul > li {
    list-style-type: none;
  }
  ```

- **Adjacent Sibling Selector**: `previous + next` - Selects the element that is immediately preceded by a specified element.
  ```css
  h1 + p {
    margin-top: 0;
  }
  ```

- **General Sibling Selector**: `element ~ siblings` - Selects all elements that are siblings of a specified element.
  ```css
  h1 ~ p {
    color: purple;
  }
  ```

These are some of the most common CSS selectors you'll encounter. They allow you to target elements in a variety of ways, giving you great flexibility and precision in styling your web pages. If you need further clarification or examples on any of these, feel free to ask!