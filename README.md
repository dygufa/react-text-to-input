# react-text-to-input
[![npm version](https://img.shields.io/npm/v/react-text-to-input.svg?style=flat-square)](https://www.npmjs.com/package/react-text-to-input)

React component that switches between a "text view" and an "input view" after a click.

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