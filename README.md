# jsdaily
[![GitHub license](https://img.shields.io/github/license/PingjunChen/jsdaily.svg)](https://github.com/PingjunChen/jsdaily/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/PingjunChen/jsdaily.svg)](https://github.com/PingjunChen/jsdaily/stargazers)

Daily utility functions for javascript.

## Install
```
$ npm install @chenpingjun/jsdaily
```

## Usage
```
const daily = require("@chenpingjun/jsdaily");
let color = daily.getRandomColor();
console.log("Color is: " + color);
let us_str = "United \t States \n";
let tiny_str = daily.removeStringSpace(us_str);
console.log(tiny_str);
```
