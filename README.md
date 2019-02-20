# jsdaily
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a893bf00c7a54d9f9b725995ca8d5329)](https://app.codacy.com/app/PingjunChen/jsdaily?utm_source=github.com&utm_medium=referral&utm_content=PingjunChen/jsdaily&utm_campaign=Badge_Grade_Dashboard)
![Build Status](https://travis-ci.org/PingjunChen/jsdaily.svg?branch=master)
[![GitHub stars](https://img.shields.io/github/stars/PingjunChen/jsdaily.svg)](https://github.com/PingjunChen/jsdaily/stargazers)

Daily utility functions for javascript.

## Install
```
$ npm install @chenpingjun/jsdaily --save
```

## Usage
```alpha
const daily = require("@chenpingjun/jsdaily");
let color = daily.getRandomColor();
console.log("Color is: " + color);
let us_str = "United \t States \n";
let tiny_str = daily.removeStringSpace(us_str);
console.log(tiny_str);
```

## License

``jsdaily`` is released under Apache License 2.0. For details, see the [LICENSE](LICENSE) file.
