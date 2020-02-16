# react-analog-number-input

A react component that displays number inputs as analog.

# Installation

Use the package manager [npm](https://www.npmjs.com/) to install react-analog-number-input.

```bash
npm install react-analog-number-input
```

Import as follows:

```javascript
import ReactAnalogNumberInput from 'react-analog-number-input'
```

# Usage

The default layout is vertical.

```javascript
const onChange = value => {
    // use value in function
};

<ReactAnalogNumberInput onChange={onChange} />
```

## Horizontal Layout

```javascript
const onChange = value => {
    // use value in function
};

<ReactAnalogNumberInput onChange={onChange} horizontal />
```

## Custom Icons

You can customize the icons to use your images

```javascript
const addIcon = <img src="your-image-link-here" />
const subtractIcon = <img src="your-image-link-here" />

const onChange = value => {
    // use value in function
};

<ReactAnalogNumberInput onChange={onChange} addIcon={addIcon} subtractIcon={subtractIcon} />
```

## Available Props

Prop | Description | Type | Value
--- | --- | --- | ---
onChange | This is the function that receives the component's value on your end | Function | 
value | The default value<br />Optional | Number | Default is 0
max | Maximum value<br />Optional | Number | Default is 20
className | Custom css class to help you style the component better<br />Optional | String | 
horizontal | The layout of the component<br />Optional | Boolean | Default is false
addIcon | Custom "add" icon for the vertical layout. e.g `<img src="your-img-link-here" />`<br />Optional | HTML ELement | 
subtractIcon | Custom "subtract" icon for the vertical layout. e.g `<img src="your-img-link-here" />`<br />Optional | HTML ELement | 
horizontalAddIcon | Custom "add" icon for the horizontal layout. e.g `<img src="your-img-link-here" />`<br />Optional | HTML ELement | 
horizontalSubtractIcon | Custom "subtract" icon for the horizontal layout. e.g `<img src="your-img-link-here" />`<br />Optional | HTML ELement | 

# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# License
[MIT](https://choosealicense.com/licenses/mit/) Copyright (c) David (Blak Dave) 2020.