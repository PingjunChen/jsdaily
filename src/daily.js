'use strict';

var exports = module.exports = {};


exports.getRandomColor = function() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

exports.removeStringSpace = function(string) {
	if (typeof string !== 'string')
		throw new TypeError('Input need to be a string!');
	return string.replace(/\s/g, '');
};
