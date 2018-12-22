const daily = require('../index');
let color = daily.getRandomColor();
console.log('Color is: ' + color);
let us_str = 'United 	States ';
let tiny_str = daily.removeStringSpace(us_str);
console.log(tiny_str);


