# react-text-to-input
[![npm version](https://img.shields.io/npm/v/react-text-to-input.svg?style=flat-square)](https://www.npmjs.com/package/react-text-to-input)

React component that switches between a "text view" and an "input view" after a click.

### [**Check the DEMO**](https://dygufa.com/react-text-to-input/example/dist/)

## How to use

### Install
Run `yarn add react-text-to-input` or `npm install react-text-to-input`

### Use
```
import TextToInput from "react-text-to-input";

<TextToInput
    value={this.state.value}
    onChange={this.onChange}
/>
```

By default, the `div` element in "the view mode" has `minHeight` set to 20px to prevent the element turning not clickable when `value` is empty.

### Properties

Property | Type | Required
--- | --- | ---
value | string | yes
onChange | \(value\: string\) \=\> void | yes
textClassName | string | no
inputClassName | string | no
textStyle | React.CSSProperties | no
inputStyle | React.CSSProperties | no
inputProps | React.HTMLProps<HTMLInputElement> | no


### Running example

```
cd example/
yarn start
```