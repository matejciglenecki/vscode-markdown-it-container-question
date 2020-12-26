# markdown-it-container-question README

## What is this?

**HARDCODED** VSCode extension that converts infamous markdown snippet:

```html
<details>
<summary>What's your question?</summary>
...this is hidden, collapsable content...
</details>
```

to the following:

```
::: q What's your question?
...this is hidden, collapsable content...
:::
```

Live action:
<details>
<summary>What's your question?</summary>
...this is hidden, collapsable content...
</details>

## Features

`question` and `answer` classes are added to html elements. Use your own `style.css` to make questions and answer prettier.

Add style for markdown in VSCode JSON settings:
```
"markdown.styles": ["/path/to/style.css"]
```

or

```
"markdown.styles": ["./relativepath/to/style.css"]
```

E.g. of `style.css`
```
.answer {
  margin: 1em 0em 0em 3em;
  padding-left: 1em;
  border-left: 3px solid rgba(0, 0, 0, 0.2);
  display: block;
}
.question {
  color: red;
}
```
